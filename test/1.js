{
	"fields": [
		{
			"isDatasource": true,
			"datasource": "BEAN",
			"datasourceConfig": {
				"method": "getValue",
				"interfaceName": "com.youku.ykcop.manage.service.impl.FormFieldValueServiceImpl"
			},
			"model": "titleLocal",
			"rules": [
				{
					"message": "请填写作品名称",
					"required": true
				},
				{
					"whitespace": true,
					"message": "请输入正确的内容，不能是空格"
				}
			],
			"label": "作品名称",
			"id": 19082,
			"type": "Input",
			"props": {
				"disabled": true
			}
		},
		{
			"model": "realCooperationType",
			"rules": [
				{
					"message": "请填写分成模式",
					"required": true
				}
			],
			"propsChange": "($value, $form) => { if($value == '2'){$form.setFieldsValue({ 'exclusivePlayFlag': '1' });} else if($value == '3'){$form.setFieldsValue({ 'exclusivePlayFlag': '2' });}}",
			"label": "分成模式",
			"id": 19083,
			"type": "RadioGroup",
			"props": {
				"options": [
					{
						"label": "独家分成",
						"value": "2"
					},
					{
						"label": "非独家分成",
						"value": "3"
					}
				]
			}
		},
		{
			"model": "rightIds",
			"rules": [
				{
					"message": "请填写许可权利",
					"required": true
				}
			],
			"label": "许可权利",
			"id": 19084,
			"type": "RightIds",
			"props": {
				"options": [
					{
						"hidden": false,
						"disabled": true,
						"label": "(1)\t新媒体播放权：包含：1）信息网络传播权：即以有线或者无线方式、收费或/和免费方式向公众提供许可作品，使用户可以通过包括但不限于互联网、局域网、广域网、城域网进行的网络点播、下载、缓存等活动，从而在用户自己选定的时间和地点获得许可作品的权利；2）以及通过上述网络实现的播放权（如网络同步直播、网络直播流、轮播、追看服务、时移收看等）；上述权利的接收终端和传播渠道：甲方或甲方关联方自有的硬件终端或甲方和甲方关联方浙江天猫技术有限公司同时作为内容服务提供方和技术方案商的硬件终端，接收终端包括但不限于台式和便携式计算机、IPad和平板电脑、手机和其他移动通讯设备、机顶盒、可穿戴设备、投影设备、互联网电视/OTT终端（含因互联网电视合规性要求与播控集成机构合作的情形和与终端厂商合作的情形）、车辆/航空器/轮船等交通工具播放设备、IPTV（含因合规性要求与运营商合作的情形）、数字电视（含因合规性要求与广电运营商合作的情形）、智能电视、天猫精灵、天猫魔盒、天猫魔屏、各类程序及软件或系统等，亦包括未来可能出现的以信息网络为传输渠道的终端；传播网络包括但不限于互联网、广播电视网、3 G/4G/5G等通信网络、局域网、高铁WIFI等。",
						"value": "1"
					},
					{
						"disabled": true,
						"label": "(2)\t点播影院放映权，即在许可的地域及期限范围内，被许可方及被许可方合作方运营的点播影院、点播院线通过互联网或者电影技术系统，以实时点播、轮播、下载播放等方式，向观众提供许可作品放映服务的权利；",
						"value": "2"
					},
					{
						"disabled": true,
						"label": "(3)\t交通运输系统放映权及点播权（含播放系统和信息网络方式）：即在航空系统（含航空器、机场、机场大巴等一切场所）、铁路系统（包括但不限于高铁、动车等铁路运输工具、候车站等场所）、船舶、公共交通系统（包括但不限于长短途客运汽车、公交车、地铁、候车站等场所）、其他城市客运方式（包括但不限于出租车等）内通过信息网络或任何非信息网络方式放映及点播的权利（包括但不限于自载点播系统播放影视内容，通过HD卡卡播放影视内容，观影设备接入无线局域网（如智能WI-FI平台，包括局域网环境下的H5专区页面或APP应用程序等）点播航空器服务器存储内容等所有方式）；",
						"value": "3"
					},
					{
						"disabled": true,
						"label": "(4)\t为实现上述权利所相关的复制权、销售权、发行权、放映权、翻译权（如授权地域包含海外）；",
						"value": "4"
					},
					{
						"disabled": true,
						"label": "(5)\t商业化权：通过行使上述权利进行商业化活动的权利（如会员付费、单点付费、贴片广告、植入广告、创意中插、压屏条、冠名广告、角标广告、情节竞猜、用户互动营销、及其他新形式广告等）等权利；",
						"value": "5"
					},
					{
						"disabled": true,
						"label": "(6)\t宣推权：为实现上述权利的更好的商业运营和商业回报，对作品进行各种渠道、各种方式的宣传推广的权利，如出于宣传推广的目的，对作品切割成的片段，重新编辑，进行传播的权利，对作品的试片、片花、预告片、剧照、海报、截图等进行广告宣传和作品推广的权利；",
						"value": "6"
					},
					{
						"disabled": true,
						"label": "(7)\t编辑修改：对作品进行适合许可平台传播方式、传播时长的修改、编辑、剪辑和适当改编或格式的修改、转码；",
						"value": "7"
					},
					{
						"label": "(8)\t广播权（电视台、电台播放权利）:指以无线方式公开广播或者传播作品，以有线传播或者转播的方式向公众传播广播的作品，以及通过扩音器或者其他传送符号、声音、图像的类似工具向公众传播广播的作品的权利。广播或传播平台包括且不限于广播电台、电视台等；",
						"value": "8"
					},
					{
						"label": "(9)\t公开放映权：被授权方有权自行或许可或禁止他人通过放映机、幻灯机等技术设备在除电影院线、电影放映厅以外的酒吧、商场、卖场、广场、公园、学校、机场等经营性或非经营性场所公开再现授权作品的权利；",
						"value": "9"
					},
					{
						"label": "(10)  院线播放权利：被授权方有权自行或许可或禁止他人通过放映机、幻灯机等技术设备在电影院线、电影放映厅公开再现授权作品的权利；",
						"value": "10"
					},
					{
						"label": "(11)\t中国大陆地区版权代理发行；",
						"value": "11"
					},
					{
						"label": "(12)\t海外版权代理发行：应按照行业习惯做广义解释，即通过一定的媒体渠道和载体向公众提供作品表演、录音录像制品的权利，即在授权地域范围（中国大陆地区之外）及期限内，对复制权、发行权、放映权、广播权、信息网络传播权等著作权财产权（但不含改编权）进行使用、许可使用及/或转让的行为，包括但不限于以下媒体渠道和载体：院线（包括影院）放映、信息网络传播（含在线点播、IPTV、OTT等）、电视台（无线、有线）播映、音像制品制售等；",
						"value": "12"
					},
					{
						"label": "(13)\t固定媒体权利（如音像制品发行等）；",
						"value": "13"
					},
					{
						"label": "(14)\t商品化权（对角色形象、角色名称、故事线、情境、续写进行单独商业开发的权利）；",
						"value": "14"
					},
					{
						"label": "(15)\t素材使用权：自行使用或许可他人使用本作品片段或素材；",
						"value": "15"
					}
				],
				"initialValue": [
					"1",
					"2",
					"3",
					"4",
					"5",
					"6",
					"7"
				]
			}
		},
		{
			"model": "schemaTitleLicenseLocal",
			"label": "",
			"id": 19085,
			"type": "SchemaTitle",
			"initialValue": "许可性质"
		},
		{
			"model": "exclusivePlayFlag",
			"rules": [
				{
					"message": "请填写独家性",
					"required": true
				}
			],
			"label": "独家性",
			"id": 19086,
			"type": "RadioGroup",
			"props": {
				"options": [
					{
						"label": "独家",
						"value": "1"
					},
					{
						"label": "非独家",
						"value": "2"
					}
				],
				"disabled": true
			}
		},
		{
			"model": "transferAuth",
			"rules": [
				{
					"message": "请填写转许可",
					"required": true
				}
			],
			"label": "转许可",
			"id": 19087,
			"type": "RadioGroup",
			"props": {
				"options": [
					{
						"label": "可",
						"value": "1"
					},
					{
						"label": "不可",
						"value": "2"
					}
				]
			}
		},
		{
			"model": "safeguardingRightsFlag",
			"rules": [
				{
					"message": "请填写维权",
					"required": true
				},
				{
					"whitespace": true,
					"message": "请输入正确的内容，不能是空格"
				}
			],
			"label": "维权",
			"id": 19088,
			"type": "RadioGroup",
			"props": {
				"options": [
					{
						"label": "含",
						"value": "1"
					},
					{
						"label": "不含",
						"value": "2"
					}
				]
			}
		},
		{
			"gutter": "12",
			"model": "rowPremiereFlag",
			"label": "",
			"id": 19089,
			"type": "RowFormItems",
			"fields": [
				{
					"model": "rowPremiereFlag.premiereFlag",
					"rules": [
						{
							"message": "请填写首播权",
							"required": true
						}
					],
					"label": "首播权",
					"type": "RadioGroup",
					"initialValue": "100",
					"required": true,
					"props": {
						"options": [
							{
								"label": "全网首播",
								"value": "1"
							},
							{
								"label": "全媒体",
								"value": "2"
							},
							{
								"label": "与电视同步首播",
								"value": "3"
							},
							{
								"label": "其它",
								"value": "100"
							}
						],
						"style": {
							"width": "390px"
						}
					}
				},
				{
					"dependsOn": {
						"rowPremiereFlag.premiereFlag": "100"
					},
					"model": "rowPremiereFlag.other",
					"rules": [
						{
							"message": "请填写其他首播权",
							"required": true
						},
						{
							"whitespace": true,
							"message": "请输入正确的内容，不能是空格"
						}
					],
					"label": "",
					"type": "Input",
					"props": {
						"placeholder": "请注明"
					}
				}
			]
		},
		{
			"model": "authorizeYearObj",
			"rules": [
				{
					"message": "请填写许可期限",
					"required": true
				}
			],
			"label": "许可期限",
			"id": 19090,
			"type": "AuthorizeYear",
			"props": {
				"min": 0,
				"precision": 0
			}
		},
		{
			"afterItemText": "小时",
			"model": "firstPublishLast",
			"rules": [
				{
					"message": "请填写首发时间",
					"required": true
				}
			],
			"label": "首发时间",
			"id": 19091,
			"type": "InputNumber",
			"props": {
				"min": 0,
				"precision": 0
			}
		},
		{
			"gutter": "12",
			"model": "rowAuthorizeArea",
			"label": "",
			"id": 19092,
			"type": "RowFormItems",
			"fields": [
				{
					"model": "rowAuthorizeArea.id",
					"rules": [
						{
							"message": "请填写许可地域",
							"required": true
						}
					],
					"label": "许可地域",
					"type": "RadioGroup",
					"initialValue": "13001",
					"required": true,
					"props": {
						"options": [
							{
								"label": "全球",
								"value": "13000"
							},
							{
								"label": "中国大陆地区及港澳台",
								"value": "18560"
							},
							{
								"label": "中国大陆地区（不含港澳台）",
								"value": "13001"
							},
							{
								"label": "其它",
								"value": "0"
							}
						]
					}
				},
				{
					"dependsOn": {
						"rowAuthorizeArea.id": "0"
					},
					"model": "rowAuthorizeArea.other",
					"rules": [
						{
							"message": "请填写许可地域",
							"required": true
						},
						{
							"whitespace": true,
							"message": "请输入正确的内容，不能是空格"
						}
					],
					"label": "",
					"type": "Input",
					"props": {
						"placeholder": "请注明"
					}
				}
			]
		},
		{
			"beforeItemText": "从许可期限结束之日算起",
			"afterItemText": "年",
			"model": "authorizeYearAfterExpire",
			"rules": [
				{
					"message": "请填写付费用户观看期限",
					"required": true
				}
			],
			"label": "付费用户观看期限",
			"id": 19093,
			"type": "InputNumber",
			"props": {
				"min": 0,
				"precision": 0
			}
		},
		{
			"model": "description",
			"rules": [
				{
					"message": "请填写有关宣推的其他特别约定",
					"required": true
				},
				{
					"whitespace": true,
					"message": "请输入正确的内容，不能是空格"
				}
			],
			"label": "有关宣推的其他特别约定",
			"id": 19094,
			"type": "TextArea",
			"props": {
				"rows": 4
			}
		},
		{
			"model": "schemaTitleSettleLocal",
			"label": "",
			"id": 19095,
			"type": "SchemaTitle",
			"initialValue": "许可费计费和结算规则填写字段"
		},
		{
			"model": "taxType",
			"rules": [
				{
					"message": "请填写税费比率",
					"required": true
				}
			],
			"label": "税费比率",
			"id": 19096,
			"type": "RadioGroup",
			"required": true,
			"props": {
				"options": [
					{
						"label": "如果乙方属一般纳税人，增值税税率为【6%】，可以足额抵扣，则结算时不再扣税费比率",
						"value": "1"
					},
					{
						"label": "如果乙方属极个别小规模纳税人，需要出具税务所代开的增值税税率为【3%】的增值税专用发票，则结算时直接扣3.36%的税费比率",
						"value": "2"
					},
					{
						"label": "如果乙方属小规模纳税人且向甲方提供税率为1%的增值税专用发票，则公式中扣减的税费率为5.60%",
						"value": "12"
					},
					{
						"label": "如果乙方不能开具增值税专用发票，只能开具普通发票，则结算时直接扣6.72%的税费比率",
						"value": "5"
					},
					{
						"label": "如乙方为个人，则结算时直接扣除23.36%的税费比例",
						"value": "14"
					}
				]
			}
		},
		{
			"model": "schemaTitleCrpLocal",
			"label": "",
			"id": 19097,
			"type": "SchemaTitle",
			"initialValue": "crp合同入库字段"
		},
		{
			"model": "isDivision",
			"rules": [
				{
					"message": "请选择是否分账",
					"required": true
				}
			],
			"label": "是否分账",
			"id": 19098,
			"type": "Switch",
			"initialValue": true,
			"props": {
				"unCheckedChildren": "否",
				"disabled": true,
				"checkedChildren": "是"
			}
		},
		{
			"model": "divisionType",
			"rules": [
				{
					"message": "请选择分账模式",
					"required": true
				}
			],
			"label": "分账模式",
			"id": 19099,
			"type": "CheckboxGroup",
			"immediateTrigger": true,
			"initialValue": [
				"9"
			],
			"required": true,
			"props": {
				"options": [
					{
						"disabled": true,
						"label": "会员拉新",
						"value": "9"
					}
				]
			}
		},
		{
			"model": "divisionCycle",
			"rules": [
				{
					"message": "请填写分账周期",
					"required": true
				}
			],
			"propsChange": "($value, $form) => {$form.setFieldsValue({ 'yearRatioList': $form.getFieldValue('divisionCycle')});}",
			"label": "分账周期",
			"shouldUpdate": true,
			"id": 19100,
			"type": "DivisionCycle"
		},
		{
			"model": "yearRatioList",
			"label": "每年分账比例",
			"id": 19101,
			"type": "YearRatioList",
			"required": true
		},
		{
			"model": "site",
			"rules": [
				{
					"message": "请填写授权平台",
					"required": true
				}
			],
			"label": "授权平台",
			"id": 19102,
			"type": "CheckboxGroup",
			"initialValue": [
				"1",
				"2",
				"3",
				"4",
				"5",
				"6",
				"7",
				"8",
				"9",
				"10",
				"11",
				"12"
			],
			"props": {
				"options": [
					{
						"label": "优酷",
						"value": "1"
					},
					{
						"label": "土豆",
						"value": "2"
					},
					{
						"label": "天猫",
						"value": "3"
					},
					{
						"label": "UC",
						"value": "4"
					},
					{
						"label": "书旗",
						"value": "5"
					},
					{
						"label": "阿里文学",
						"value": "6"
					},
					{
						"label": "高德",
						"value": "7"
					},
					{
						"label": "大麦",
						"value": "8"
					},
					{
						"label": "口碑",
						"value": "9"
					},
					{
						"label": "天猫魔盒",
						"value": "10"
					},
					{
						"label": "支付宝",
						"value": "11"
					},
					{
						"label": "钉钉",
						"value": "12"
					}
				],
				"disabled": true
			}
		},
		{
			"afterItemText": "份",
			"model": "count",
			"rules": [
				{
					"message": "请填写合同份数",
					"required": true
				}
			],
			"label": "合同份数",
			"id": 19103,
			"type": "InputNumber",
			"props": {
				"min": 1,
				"max": 99
			}
		},
		{
			"model": "signUpType",
			"rules": [
				{
					"message": "请选择签署类型",
					"required": true
				}
			],
			"label": "签署类型",
			"id": 19104,
			"immediateTrigger": true,
			"type": "RadioGroup",
			"initialValue": "NEW",
			"props": {
				"options": [
					{
						"disabled": true,
						"label": "新签",
						"value": "NEW"
					},
					{
						"disabled": true,
						"label": "续约",
						"value": "RENEW"
					}
				]
			}
		},
		{
			"model": "isRenew",
			"rules": [
				{
					"message": "请选择是否自动续签",
					"required": true
				}
			],
			"label": "是否自动续签",
			"id": 19105,
			"immediateTrigger": true,
			"type": "RadioGroup",
			"props": {
				"options": [
					{
						"label": "自动续签",
						"value": "YES"
					},
					{
						"label": "不自动续签",
						"value": "NO"
					}
				]
			}
		},
		{
			"dependsOn": {
				"isRenew": "YES"
			},
			"model": "renewType",
			"rules": [
				{
					"message": "请选择续约方式",
					"required": true
				}
			],
			"label": "续约方式",
			"id": 19106,
			"immediateTrigger": true,
			"type": "RadioGroup",
			"initialValue": "MULTIPLE",
			"props": {
				"options": [
					{
						"disabled": true,
						"label": "单次",
						"value": "SINGLE"
					},
					{
						"disabled": true,
						"label": "连续",
						"value": "MULTIPLE"
					}
				]
			}
		},
		{
			"dependsOn": {
				"isRenew": "YES"
			},
			"afterItemText": "月",
			"model": "renewMonth",
			"rules": [
				{
					"message": "请填写续约时长",
					"required": true
				}
			],
			"label": "续约时长",
			"id": 19107,
			"type": "InputNumber",
			"props": {
				"min": 1,
				"max": 99
			}
		},
		{
			"model": "estimateStartDate",
			"rules": [
				{
					"message": "请填写预估上线时间",
					"required": true
				}
			],
			"label": "预估上线时间",
			"id": 19108,
			"type": "DatePickerPlus",
			"props": {
				"saveFormat": "x",
				"showTime": true,
				"format": "YYYY-MM-DD"
			}
		},
		{
			"model": "instruction",
			"rules": [
				{
					"message": "请填写合同说明",
					"required": true
				},
				{
					"whitespace": true,
					"message": "请输入正确的内容，不能是空格"
				}
			],
			"label": "合同说明",
			"id": 19109,
			"type": "TextArea",
			"props": {
				"rows": 4
			}
		},
		{
			"model": "schemaTitleShowListLocal",
			"label": "",
			"id": 19110,
			"type": "SchemaTitle",
			"initialValue": "作品清单"
		},
		{
			"isDatasource": true,
			"datasource": "BEAN",
			"datasourceConfig": {
				"method": "getValue",
				"interfaceName": "com.youku.ykcop.manage.service.impl.FormFieldValueServiceImpl"
			},
			"model": "showList",
			"rules": [
				{
					"message": "请填写合同说明",
					"required": true
				}
			],
			"label": "",
			"id": 19111,
			"type": "ShowList",
			"props": {
				"columns": [
					{
						"dataIndex": "order",
						"title": "序号",
						"render": "(text, record, index) => index+1",
						"key": "order"
					},
					{
						"dataIndex": "showName",
						"title": "项目名称",
						"key": "showName"
					},
					{
						"dataIndex": "teacherInfo",
						"title": "主讲人",
						"render": "(text, record, index) => { const teacher = []; text&&text.map(item=>{ teacher.push(item.name); }); return teacher.join(\"，\"); }",
						"key": "teacherInfo"
					},
					{
						"dataIndex": "showTotal",
						"title": "正片集数",
						"render": "text => `共${text}集`",
						"key": "showTotal"
					}
				]
			}
		},
		{
			"model": "schemaTitleOurContactLocal",
			"label": "",
			"id": 19112,
			"type": "SchemaTitle",
			"initialValue": "甲方联络信息"
		},
		{
			"options": [
				{
					"value": "13",
					"desc": "优酷信息技术（北京）有限公司"
				},
				{
					"value": "92",
					"desc": "天津阿里巴巴文化娱乐有限公司"
				}
			],
			"model": "partyACompany",
			"rules": [
				{
					"message": "请填写甲方",
					"required": true
				},
				{
					"whitespace": true,
					"message": "请输入正确的内容，不能是空格"
				}
			],
			"label": "甲方",
			"id": 19113,
			"type": "Select",
			"initialValue": "13",
			"props": {
				"disabled": true,
				"style": {
					"width": "300px"
				}
			}
		},
		{
			"model": "partyAAddress",
			"rules": [
				{
					"message": "请填写地址",
					"required": true
				},
				{
					"whitespace": true,
					"message": "请输入正确的内容，不能是空格"
				}
			],
			"label": "地址",
			"id": 19114,
			"type": "Input",
			"initialValue": "北京市朝阳区望京东园四区4号楼",
			"props": {
				"disabled": true,
				"style": {
					"width": "300px"
				}
			}
		},
		{
			"model": "partyAPostcard",
			"rules": [
				{
					"message": "请填写邮编",
					"required": true
				},
				{
					"whitespace": true,
					"message": "请输入正确的内容，不能是空格"
				}
			],
			"label": "邮编",
			"id": 19115,
			"type": "Input",
			"initialValue": "100102",
			"props": {
				"disabled": true,
				"style": {
					"width": "300px"
				}
			}
		},
		{
			"model": "partyAContact",
			"rules": [
				{
					"message": "请填写联系人",
					"required": true
				},
				{
					"whitespace": true,
					"message": "请输入正确的内容，不能是空格"
				}
			],
			"label": "联系人",
			"id": 19116,
			"type": "Input",
			"props": {
				"style": {
					"width": "300px"
				}
			}
		},
		{
			"model": "partyAMobile",
			"rules": [
				{
					"message": "请填写正确格式的联系电话",
					"required": true
				},
				{
					"whitespace": true,
					"message": "请输入正确的内容，不能是空格"
				}
			],
			"label": "联系电话",
			"id": 19117,
			"type": "Input",
			"props": {
				"style": {
					"width": "300px"
				}
			}
		},
		{
			"model": "partyAEmail",
			"rules": [
				{
					"message": "请填写E-Mail",
					"required": true
				},
				{
					"whitespace": true,
					"message": "请输入正确的内容，不能是空格"
				},
				{
					"type": "email",
					"message": "请输入正确的邮箱"
				}
			],
			"label": "E-Mail",
			"id": 19118,
			"type": "Input",
			"props": {
				"style": {
					"width": "300px"
				}
			}
		},
		{
			"model": "schemaTitleOtherContactLocal",
			"label": "",
			"id": 19119,
			"type": "SchemaTitle",
			"initialValue": "乙方联络信息"
		},
		{
			"isDatasource": true,
			"datasource": "BEAN",
			"datasourceConfig": {
				"method": "getValue",
				"interfaceName": "com.youku.ykcop.manage.service.impl.FormFieldValueServiceImpl"
			},
			"model": "companyName",
			"label": "乙方",
			"id": 19120,
			"type": "Input",
			"props": {
				"disabled": true,
				"style": {
					"width": "300px"
				}
			}
		},
		{
			"isDatasource": true,
			"datasource": "BEAN",
			"datasourceConfig": {
				"method": "getValue",
				"interfaceName": "com.youku.ykcop.manage.service.impl.FormFieldValueServiceImpl"
			},
			"model": "country",
			"label": "地址",
			"id": 19121,
			"type": "Input",
			"props": {
				"disabled": true,
				"style": {
					"width": "300px"
				}
			}
		},
		{
			"isDatasource": true,
			"datasource": "BEAN",
			"datasourceConfig": {
				"method": "getValue",
				"interfaceName": "com.youku.ykcop.manage.service.impl.FormFieldValueServiceImpl"
			},
			"model": "postcode",
			"label": "邮编",
			"id": 19122,
			"type": "Input",
			"props": {
				"disabled": true,
				"style": {
					"width": "300px"
				}
			}
		},
		{
			"isDatasource": true,
			"datasource": "BEAN",
			"datasourceConfig": {
				"method": "getValue",
				"interfaceName": "com.youku.ykcop.manage.service.impl.FormFieldValueServiceImpl"
			},
			"model": "contacts",
			"label": "联系人",
			"id": 19123,
			"type": "Input",
			"props": {
				"disabled": true,
				"style": {
					"width": "300px"
				}
			}
		},
		{
			"isDatasource": true,
			"datasource": "BEAN",
			"datasourceConfig": {
				"method": "getValue",
				"interfaceName": "com.youku.ykcop.manage.service.impl.FormFieldValueServiceImpl"
			},
			"model": "mobile",
			"label": "联系电话",
			"id": 19124,
			"type": "Input",
			"props": {
				"disabled": true,
				"style": {
					"width": "300px"
				}
			}
		},
		{
			"isDatasource": true,
			"datasource": "BEAN",
			"datasourceConfig": {
				"method": "getValue",
				"interfaceName": "com.youku.ykcop.manage.service.impl.FormFieldValueServiceImpl"
			},
			"model": "email",
			"label": "E-Mail",
			"id": 19125,
			"type": "Input",
			"props": {
				"disabled": true,
				"style": {
					"width": "300px"
				}
			}
		},
		{
			"model": "schemaTitleBankInfoLocal",
			"label": "",
			"id": 19126,
			"type": "SchemaTitle",
			"initialValue": "银行信息"
		},
		{
			"isDatasource": true,
			"datasource": "BEAN",
			"datasourceConfig": {
				"method": "getValue",
				"interfaceName": "com.youku.ykcop.manage.service.impl.FormFieldValueServiceImpl"
			},
			"model": "bankCardInfoSubBankName",
			"label": "开户银行",
			"id": 19127,
			"type": "Input",
			"props": {
				"disabled": true,
				"style": {
					"width": "300px"
				}
			}
		},
		{
			"isDatasource": true,
			"datasource": "BEAN",
			"datasourceConfig": {
				"method": "getValue",
				"interfaceName": "com.youku.ykcop.manage.service.impl.FormFieldValueServiceImpl"
			},
			"model": "bankCardInfoName",
			"label": "开户名称",
			"id": 19128,
			"type": "Input",
			"props": {
				"disabled": true,
				"style": {
					"width": "300px"
				}
			}
		},
		{
			"isDatasource": true,
			"datasource": "BEAN",
			"datasourceConfig": {
				"method": "getValue",
				"interfaceName": "com.youku.ykcop.manage.service.impl.FormFieldValueServiceImpl"
			},
			"model": "bankCardInfoCard",
			"label": "开户账号",
			"id": 19129,
			"type": "Input",
			"props": {
				"disabled": true,
				"style": {
					"width": "300px"
				}
			}
		},
		{
			"model": "contractType",
			"id": 19130,
			"type": "Input",
			"initialValue": "mbrIncomeDivide",
			"props": {
				"style": {
					"display": "none"
				}
			}
		}
	]
}