/*
 * @Author: shimingxia
 * @Date: 2022-06-06 17:01:25
 * @LastEditors: shimingxia
 * @LastEditTime: 2022-06-06 17:01:32
 * @Description: 
 */
// * 配置完成后记得重启下
const CracoLessPlugin = require("craco-less");

module.exports = {
  babel: {
    //用来支持装饰器
    plugins: [["@babel/plugin-proposal-decorators", {legacy: true}]]
  },
  plugins: [
    {
      plugin: CracoLessPlugin
    }
  ]
};