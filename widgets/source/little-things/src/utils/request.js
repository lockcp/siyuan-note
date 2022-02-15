/* import config  from './config.js'  */
import axios    from 'axios'
import {systemConfigs} from './config.js'

/**  
 * 查询数据：
 * 返回 promise 对象，通过 await 等待结果，不使用 await 则是异步请求，然后通过 then 方法获得异步请求结果 
 **/
export function queryData(sql){
  let url
  if(systemConfigs.IS_TEST){  url = systemConfigs.TEST_URL }else{ url = systemConfigs.PROD_URL }
  return new Promise((resolve, reject) => {
    axios.post(url + '/api/query/sql', {stmt: sql} ).then((data) => {   
        if (data.status == 200) {
            if(data.data.code == 0){
                resolve(data.data.data)  
            }else{
                console.log('服务端正常反应，出现其他错误')
                reject(data.data) //服务器有返回，但可能是其他错误，比如 sql 代码出错
            }                  
        }
    }).catch((error) => {
        reject(error)
    })
})
}

/* 查询块属性
* 在原始数据的基础上查询块属性并嵌入到查询结果中，通过 await 等待结果，不使用 await 则是异步请求
* @param blocks：原始内容块
*/
export async function embedAttrs(blocks){
  // 获取块属性
  for (let i = 0; i < blocks.length; i++) {
    const id  = blocks[i].id;
    let sql   = "SELECT * FROM attributes WHERE block_id = '"+ id + "'"
    let attrs = await queryData(sql)
    attrs.forEach(attr => {
      let name = attr.name
      name = name.replace(/-/g,"_") // 将-换成_，避免 VUE 命名问题
      blocks[i][name] = attr.value
      });
    }

    return blocks
}


/* 设置块属性 
**/
export function setAttrs(data){
  let url
  if(systemConfigs.IS_TEST){  url = systemConfigs.TEST_URL }else{ url = systemConfigs.PROD_URL }
  return new Promise((resolve, reject) => {
      axios.post(url + '/api/attr/setBlockAttrs', data ).then((res) => { 
          if(res){
              console.log("设置块属性：")
              console.log(data)
              resolve(true)
          }
      }).catch((error) => {
          reject(error)
      })
  })
}

/* 从远程获取数据并存入本地数据库
 */
export async function getRemoteData(path=""){
    try {
        let sql = "select b.id ,b.type,b.content, b.box,b.path,b.created,b.updated, a.name as attr_name, a.value as attr_value from blocks as b left join attributes as a on b.id = a.block_id where b.type <> 'l' and ( a.name = 'custom-lz-todo' or a.name= 'custom-lz-priority' ) and b.path like '%"+ path +"%' union select b.id ,b.type,b.content , b.box,b.path,b.created,b.updated, a.name as attr_name, a.value as attr_value from blocks as b left join attributes as a on b.id = a.block_id  where b.id in (select block_id from spans where (type = 'text' or type = 'tag') and (content like '%@20%' or content like '%@todo%') and path like '%"+ path +"%')"
        // console.log(sql)
        let data = await queryData(sql)
        if(data.length != 0){
            return data
        }else{
            throw '远程数据请求结果为空'
        }
    } catch (error) {
        console.log(error)
    }
}
