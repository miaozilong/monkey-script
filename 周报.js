// ==UserScript==
// @name         weekly report
// @namespace    miao.zilong@qq.com
// @version      0.1
// @description  周报的脚本
// @author       miao.zilong@qq.com
// @match        http://10.111.161.201:8080/spa/workflow/static4form/index.html*
// @grant        none
// @run-at document-end
// @require https://cdn.bootcdn.net/ajax/libs/jquery/2.2.4/jquery.js
// @require http://cdn.bootcdn.net/ajax/libs/moment.js/2.29.1/moment.js

// ==/UserScript==


$(function () {
    setTimeout(() => {
        if (document.title === '创建 - 03-SAP项目报工工时流程') {
            $('#field11673').val('周报' + moment().format('YYYY-MM-DD'));
            // 本周工作天数
            let s = window.prompt('请输入本周工作的天数', '5');
            let weekday = window.parseInt(s);
            for (let i = 0; i < weekday - 1; i++) {
                $("#addbutton0").click()
            }

            let filelds = [
                // 公司代码
                {idPrefix: 'field11710_', value: '1100'},
                // 成本中心号
                {idPrefix: 'field11711_', value: 'R110000103'},
                // 作业类型
                {idPrefix: 'field11712_', value: 'TY19'},
                // SAPWBS
                {idPrefix: 'field11682_', value: 'E-YF-21-013-01-02'},
                // 报工人
                {idPrefix: 'field11674_', value: '1989'},
                // 工号
                {idPrefix: 'field11675_', value: '00002390'},
                // 报工工时
                {idPrefix: 'field11676_', value: '8.0'},
                // 项目负责人工号  00002264 赵旭
                {idPrefix: 'field11690_', value: '00002264'}
            ]

            for (let i = 0; i < weekday; i++) {
                for (let v of filelds) {
                    $(`input[name=${v.idPrefix}${i}]`).prop('type', 'text')
                    $(`#${v.idPrefix}${i}`).val(v.value)
                    $(`#${v.idPrefix}${i}`).val(v.value)
                    // 日期
                    $(`#field11681_${i}`).val(moment().add(-weekday + i + 1, 'day').format('YYYY-MM-DD'));
                }
            }

        }
    }, 3 * 1000)
})
