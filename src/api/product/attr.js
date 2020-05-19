/* 
包含所有平台属性管理的接口请求函数
*/
import request from '@/utils/request'


export default {
  /* 
  获取属性列表
  */
  getList (category1Id, category2Id, category3Id) {
    return request.get(`/admin/product/attrInfoList/${category1Id}/${category2Id}/${category3Id}`)
  },

  /* 
  添加与更新属性
  */
  addUpdate(attr) {
    return request.post('/admin/product/saveAttrInfo', attr)
  },

  /* 
  删除属性
  */
  remove (id) {
    return request.delete(`/admin/product/deleteAttr/${id}`)
  }
}

