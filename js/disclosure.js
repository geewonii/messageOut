
$(function() {
  var body = $('body');
  var $idis_contents = $('.idis_contents');
  var $idis_fake_content = $('.idis_fake_content');
  init();
  
  function init() {
    $(".idis_wrap li").each(function(index) {
      $(this).hasClass("active") && $(".idisModel").eq(index).fadeIn(300);
    })
  }

  // 选中tab
  $(".idis_wrap li").click(function() {
    $(this).siblings().removeClass("active");
    $(this).addClass("active");
    $(".idisModel").fadeOut(200);
    init();
  })

  //control 显示更多
  $idis_contents.each(function() {
    $(this).html().length !== 0 &&
    $(this).append('<label class="idis_expand_more">...更多</label>');
  })
  $idis_fake_content.each(function() {
    $(this).html().length !== 0 &&
    $(this).append(' <label class="idis_expand_more2">收起</label>');
  })
  body.on('click', '.idis_expand_more', function() {
    $(this).parent().hide();
    $(this).parent().siblings(".idis_fake_content").show();
  });
  body.on('click', '.idis_expand_more2', function() {
    $(this).parent().hide();
    $(this).parent().siblings(".idis_contents").show();
  });

  //备案信息数据及处理
  var $idis_2_todo = $("#idis_2_todo");
  var information = [
    {
      id: '1',
      title: '（地方金融监管部门的备案登记信息）',
      img: '',
      tips: '正在办理中···',
      p: ['1.备案登记地方金融监管部门：正在沟通申请中','2.备案登记时间：正在办理中','3.备案登记编号：正在办理中']
    }, {
      id: '1',
      title: '（电信业务经营许可证号）',
      img: '',
      tips: '正在办理中···',
      p: ['网络借贷中介业务电信业务经营许可证号 ：正在办理中']
    }, {
      id: '3',
      title: '（资金存管信息）',
      img: '',
      tips: '正在开发当中···',
      p: ['1.资金存管银行全称：海口联合农商银行','2.资金存管上线时间：暂未上线','3.丰利金服和海口联合农商银行签署的资金存管合作协议，如上图。']
    }, {
      id: '4',
      title: '（资金存管信息）',
      img: '',
      tips: '正在开发当中···',
      p: ['资金存管系统业务流程图']
    }, {
      id: '5',
      title: '网站备案及评测信息',
      img: './image/628677461767993860.png',
      imgStyle: 'height:100%;',
      tips: '',
      p: ['公安机关出具的网站备案图标及编号：','https://www.phonelee.com/Content/new/newimages/%E7%B2%A4%E5%85%AC%E7%BD%91%E5%A4%87%E6%A1%88.png @&# 粤公网安备44010402000630号 ','公安机关出具的网站备案信息截图（如上图）']
    }, {
      id: '6',
      title: '网站备案及评测信息',
      img: './image/192293488311300594.png',
      imgStyle: 'width:100%;',
      tips: '',
      p: ['2.网站ICP备案信息']
    }, {
      id: '7',
      title: '网站备案及评测信息',
      img: '',
      tips: '正在评测当中···',
      p: ['3.信息系统安全等级保护第三级测评 ','测评得分：正在评测当中','测评机构：工业和信息化部电子第五研究所（中国赛宝实验室）']
    }
  ];
  information.forEach(function(todo) {
    var content = '';
    var children = '';
    todo.img ?
      content = `<img draggable="false" style="${todo.imgStyle ? todo.imgStyle : ''}" src="${todo.img}" alt="${todo.img}">`:
        content = `<h3>${todo.tips}</h3>`;
    todo.p.forEach(function(item) {
      if (!!item.match(/^((https|http)?:\/\/)[^\s]+/)) {
        const splitArr = item.split('@&#');
        children += `
        <p>
          <img src="${splitArr[0]}" alt="" />
          <span>${splitArr[1]}</span>
        </p>
        `;
        return;
      }
      children += `<p>${item}</p>`;
    });
    $idis_2_todo.append(`
      <div class="idis_2_item">
        <h2>${todo.title}</h2>
        <div class="idis_shadow">
          ${content}
        </div>
        <font>
          <p>${children}</p>
        </font>
      </div>
    `);
  });

  //组织信息数据及处理
  var organizeInfo1 = {
    headerTitle: '丰利金服工商信息',
    children: [
      {
        id: 1,
        title: '公司全称',
        content: '广州杰莱互联网金融信息服务有限公司'
      }, {
        id: 2,
        title: '公司简称',
        content: '丰利金服'
      }, {
        id: 3,
        title: '统一社会信用代码',
        content: '91440101321070552W'
      }, {
        id: 4,
        title: '公司注册资本',
        content: '1000万'
      }, {
        id: 5,
        title: '实缴注册资本',
        content: '1000万'
      }, {
        id: 6,
        title: '公司注册地',
        content: '广州市天河区海安路13号之一2104房'
      }, {
        id: 7,
        title: '公司经营地',
        content: '广州市天河区海安路13号之一2104房'
      }, {
        id: 8,
        title: '公司成立时间',
        content: '2014年12月15日'
      }, {
        id: 9,
        title: '公司经营期限',
        content: '长期'
      }, {
        id: 10,
        title: '公司经营状态',
        content: '在营（开业）企业'
      }, {
        id: 11,
        title: '公司法定代表人',
        content: '钱博'
      }, {
        id: 12,
        title: '实际控制人',
        content: '钱博'
      }, {
        id: 13,
        title: '首席运营官',
        content: '赵阳'
      }, {
        id: 14,
        title: '首席风控官',
        content: '郑国华'
      }, {
        id: 15,
        title: '技术总监',
        content: '罗灿奇'
      }, {
        id: 16,
        title: '总经理',
        content: '钱博'
      }, {
        id: 17,
        title: '财务总监',
        content: '黄利娟'
      }, {
        id: 18,
        title: '公司经营范围',
        content: '互联网金融信息服务（根据国家规定需要审批的，获得审批后方可经营）;受托管理股权投资基金（具体经营项目以金融管理部门核发批文为准）;依托互联网等技术手段，提供金融中介服务（根据国家规定需要审批的，获得审批后方可经营）;受金融企业委托提供非金融业务服务;受金融机构委托从事金融业务流程外包服务;受金融机构委托从事金融信息技术外包服务;'
      }, {
        id: 19,
        title: '分支机构信息',
        content: '无分支机构'
      }
    ]
  };
  var organizeInfo2 = {
    headerTitle: '丰利金服官方渠道信息',
    children: [
      {
        id: 1,
        title: '官方网站',
        content: 'www.phonelee.com'
      }, {
        id: 2,
        title: '官方网站IP地址',
        content: '39.108.132.146 / 120.79.8.3'
      }, {
        id: 3,
        title: '官方网站上线运营时间',
        content: '2015-7-1'
      }, {
        id: 4,
        title: '平台 APP 名称',
        content: '暂无APP'
      }, {
        id: 5,
        title: '微博',
        content: 'http://weibo.com/phonelee1'
      }, {
        id: 6,
        title: '微信公众号名称',
        content: '丰利金服'
      }, {
        id: 7,
        title: '微信公众号ID',
        content: 'yangyang_0023'
      }, {
        id: 8,
        title: '咨询、投诉、举报联系电话',
        content: '400-837-2223'
      }, {
        id: 9,
        title: '咨询、投诉、举报电子邮箱',
        content: 'service@phonelee.com'
      }, {
        id: 10,
        title: '咨询、投诉、举报通讯地址',
        content: '广州天河区珠江新城海安路13号财富世纪广场A1栋2104'
      }
    ]
  };
  new SelfTable("#idis_3_table1", { data: organizeInfo1 });
  new SelfTable("#idis_3_table2", { data: organizeInfo2 });

  // 审核信息数据及处理
  var $idis_4_todo = $("#idis_4_todo");
  var audit = [
    {
      id: '1',
      title: '二·2017年度的合规性审查报告',
      img: '',
      tips: '（正在办理中）',
      p: ['律师事务所出具的法律意见书']
    }, {
      id: '1',
      title: '三·经营合规重点环节的审计结果',
      img: '',
      tips: '（正在办理中）',
      p: ['会计师事务所出具的专项审计报告']
    }
  ];
  audit.forEach(function(todo) {
    var content = '';
    var children = '';
    todo.img ?
      content = `<img draggable="false" style="${todo.imgStyle ? todo.imgStyle : ''}" src="${todo.img}" alt="${todo.img}">`:
        content = `<h3>${todo.tips}</h3>`;
    todo.p.forEach(function(item) {
      children += `<p>${item}</p>`;
    });
    $idis_4_todo.append(`
      <div class="idis_4_item">
        <h2>${todo.title}</h2>
        <div class="idis_shadow">
          ${content}
        </div>
        <font>
          <p>${children}</p>
        </font>
      </div>
    `);
  });

  // 经营信息数据及处理
  var businessInfo1 = {
    headerTitle: '丰利金服交易数据',
    children: [
      {
        id: 1,
        title: '累计交易总额',
        content: '923993687元'
      }, {
        id: 2,
        title: '累计交易笔数',
        content: '32844'
      }, {
        id: 3,
        title: '借贷余额',
        content: '31727287元'
      }, {
        id: 4,
        title: '累计借款人数量',
        content: '277'
      }, {
        id: 5,
        title: '累计出借人数量',
        content: '9481'
      }, {
        id: 6,
        title: '当前借款人数量',
        content: '203'
      }, {
        id: 7,
        title: '当前出借人数量',
        content: '212'
      }, {
        id: 8,
        title: '前十大借款人待还金额占比',
        content: '3.97%'
      }, {
        id: 9,
        title: '最大单一借款人待还金额占比',
        content: '2.71%'
      }, {
        id: 10,
        title: '关联关系借款余额',
        content: '0'
      }, {
        id: 11,
        title: '逾期金额',
        content: '0'
      }, {
        id: 12,
        title: '逾期笔数',
        content: '0'
      }, {
        id: 13,
        title: '逾期90天以上金额',
        content: '0'
      }, {
        id: 14,
        title: '逾期90天以上笔数',
        content: '0'
      }, {
        id: 15,
        title: '代偿金额',
        content: '0'
      }, {
        id: 16,
        title: '代偿笔数',
        content: '0'
      }
    ],
    footerInfo: '数据截止日期：2018-2-28（每月前5个工作日更新）',
  };
  var businessInfo2 = {
    children: [
      {
        id: 1,
        title: '注册',
        content: '暂不收费'
      }, {
        id: 2,
        title: '充值',
        content: '暂不收费'
      }, {
        id: 3,
        title: '实名认证',
        content: '暂不收费'
      }, {
        id: 4,
        title: '自动投标功能',
        content: '暂不收费'
      }, {
        id: 5,
        title: '普通提现',
        content: '2元/笔'
      }, {
        id: 6,
        title: '充值未投标提现',
        content: '提现金额的0.50% +2元手续费'
      }, {
        id: 7,
        title: '账户管理费',
        content: '暂不收费'
      }
    ]
  };
  var businessInfo3 = {
    children: [
      {
        id: 1,
        title: '注册',
        content: '暂不收费'
      }, {
        id: 2,
        title: '充值',
        content: '暂不收费'
      }, {
        id: 3,
        title: '实名认证',
        content: '暂不收费'
      }, {
        id: 4,
        title: '普通提现',
        content: '2元/笔'
      }, {
        id: 5,
        title: '账户管理费',
        content: '暂不收费'
      }, {
        id: 6,
        title: '评估费',
        content: '暂不收费'
      }, {
        id: 6,
        title: '调查费',
        content: '暂不收费'
      }, {
        id: 6,
        title: '平台佣金',
        content: '6.6%-9.6%'
      }
    ]
  };
  new SelfTable("#idis_5_table1", { data: businessInfo1 });
  new SelfTable("#idis_5_table2", { data: businessInfo2 });
  new SelfTable("#idis_5_table3", { data: businessInfo3 });

  // 重大信息数据及处理
  var importantInfo = {
    headerTitle: '丰利金服重大信息披露',
    children: [
      {
        id: 1,
        title: '公司减资、合并、分立、解散或申请破产',
        content: '无'
      }, {
        id: 2,
        title: '公司依法进入破产程序',
        content: '无'
      }, {
        id: 3,
        title: '公司被责令停业、整顿、关闭',
        content: '无'
      }, {
        id: 4,
        title: '公司涉及重大诉讼、仲裁，或涉嫌违法违规被有权机关调查，或受到刑事处罚、重大行政处罚',
        content: '无'
      }, {
        id: 5,
        title: '公司法定代表人、实际控制人、控股股东、主要负责人、董事、监事、高级管理人员的变更信息',
        content: '无'
      }, {
        id: 6,
        title: '公司法定代表人、实际控制人、主要负责人、董事、监事、高级管理人员涉及重大诉讼、仲裁，或涉嫌违法违纪被有权机关调查，或受到刑事处罚、重大行政处罚，或被采取强制措施',
        content: '无'
      }, {
        id: 7,
        title: '公司主要或者全部业务陷入停顿',
        content: '无'
      }, {
        id: 8,
        title: '存在欺诈、损害出借人利益等其他影响网络借贷信息中介机构经营活动的重大事项',
        content: '无'
      }
    ],
    footerInfo: '数据截止日期：2018-2-28（每月前5个工作日更新）'
  };
  new SelfTable("#idis_6_table1", { data: importantInfo });

  // 运营报告数据及处理
  var $idis_8_todo = $("#idis_8_todo");
  var reports = [
    {
      id: '1',
      title: '2018年2月运营报告',
      img: './image/8_08.png',
      href: ''
    }, {
      id: '2',
      title: '2018年1月运营报告',
      img: './image/8_03.png',
      href: ''
    }, {
      id: '3',
      title: '2017年12月运营报告',
      img: './image/8_05.png',
      href: ''
    }, {
      id: '4',
      title: '2017年11月运营报告',
      img: './image/8_14.png',
      href: ''
    }, {
      id: '5',
      title: '2017年10月运营报告',
      img: './image/8_17.png',
      href: ''
    }, {
      id: '6',
      title: '2017年9月运营报告',
      img: './image/8_19.png',
      href: ''
    }
  ];
  reports.forEach(function(todo) {
    $idis_8_todo.append(`
    <a href="${todo.href}">
      <div class="idis_8_item">
        <div><img src="${todo.img}" alt=""></div>
        <p>${todo.title}</p>
      </div>
    </a>
    `);
  });
  $('#light-pagination').pagination({
    pages: 20,
    cssStyle: 'light-theme'
  });
  $('#dark-pagination').pagination({
    pages: 20,
    cssStyle: 'dark-theme',
    displayedPages: 3,
    edges: 3
  });
  $('#compact-pagination').pagination({
    pages: 70,
    cssStyle: 'compact-theme',
    displayedPages: 7
  });
  
});


