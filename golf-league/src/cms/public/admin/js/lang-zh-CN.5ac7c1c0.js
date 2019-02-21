(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["lang-zh-CN"],{a6b0:function(e,t,o){"use strict";o.r(t),o.d(t,"dateTimeFormats",function(){return n});const n={short:{year:"numeric",month:"short",day:"numeric"},long:{year:"numeric",month:"short",day:"numeric",weekday:"short",hour:"numeric",minute:"numeric",hour12:!0}};t["default"]={about_directus:"关于Directus",activity:"操作记录",my_activity:"操作记录",activity_log:"操作日志",activity_outside_directus:"此项目是在Directus之外创建的。",admin_email:"管理员电子邮件",admin_password:"管理员密码",additional_info:"附加信息",add_new:"添加新的",add_field_filter:"添加字段筛选器",add_note:"为用户添加有用的注释...",admin_settings:"管理设置",almost_done_options:"快完成啦！接下来请检查看下面的界面选项。",almost_done_copy:"每个界面都可以根据您的需求进行完美定制。以下是此字段的可用选项，只有部分是必需的。",all:"全部",statuses:"状态",api_url:"API地址",api_installed:"API已成功安装",auto_generated:"自动生成...",batch:"批量处理",batch_edit:"批量编辑数据: {collection}",batch_delete:"批量删除",batch_delete_confirm:"您还没有选择数据 | 您确定要删除此条数据吗? 此操作无法撤消。 | 您确定要删除这 {count} 条数据吗?  此操作无法撤消。",between:"介于",both:"两个",bookmarks:"书签",cancel:"取消",change_project:"改变项目",choose_one:"选择一个",choose_project:"选择项目",choose_interface:"选择一个如何管理这些数据的界面。",clear:"清除",click_to_toggle_all_none:"单击可以打开或关闭整列",connection:"连接",collection:"集合",collections_and_fields:"集合与字段",collection_updated:"{collection} 集合 更新成功",collection_removed:"{collection} 集合 移除成功",collection_names_cannot_be_changed:"此时无法编辑集合名称。",collections:"集合",collection_count:"未创建集合 | 一个集合 | {count} 个集合","collections-directus_files":"文件","collections-directus_users":"用户","collections-directus_activity":"操作记录",comment:"注释",comments:"注释",coming_soon:"即将推出",contains:"包含",config_error:"缺少配置",config_error_copy:"确保您已创建应用程序的配置文件",collection_contains_items:"{collection} 包含 {count} 条数据",currently_selected:"当前选中：{thing}",create:"创建",creating_item:"正在创建数据",creating_item_page_title:"正在创建数据：{collection}",creating_role:"正在创建角色",create_role:"创建角色",create_field:"创建字段",update_field:"更新字段",create_collection:"创建集合",database_connection:"数据库连接",database_connection_copy:"接下来，我们需要知道如何连接到管理此项目的数据库。",datatype:"数据类型",db_datatype:"{db}数据类型",editing_my_profile:"编辑我的个人资料",fieldtypes:{alias:"不保存数据或数据库没有对应列的字段",array:"API响应的标准数组格式",datetime:"ISO格式的日期和时间，例如：2018-09-19T14:00:43.381Z",date:"日期，例如：2018-09-19",time:"时间，例如：14:09:22",file:"外键指向directus_files.id",group:"将字段可视化地分组在一起，子组将把组保存到directus_fields.group中",integer:"整数",decimal:"包含小数的数字",json:"API响应的标准数组格式",lang:"特定用于翻译界面接口，它用来存储语言密钥",m2o:"多对一关系",o2m:"一对多关系",sort:"系统字段，用于拖放项目重新排序",status:"系统字段，用于发布工作流程",string:"任意文字，数字，空格或符号;由其长度（字符数）定义和限制",translation:"特定用于翻译界面，此多对一关系用来存储多语言内容",uuid:"通用唯一标识符",datetime_created:"系统字段，用于跟踪创建项目的日期时间，用于修订",datetime_updated:"系统字段，用于跟踪项目更新的日期时间，用于修订",user_created:"系统字段，用于跟踪创建项目的用户，用于修订",user_updated:"系统字段，用于跟踪更新项目的用户，用于修订"},datatypes:{mysql:{CHAR:"固定长度的非二进制字符串，右填充空格。长度可以是0到255个字符。",VARCHAR:"一个可变长度的非二进制字符串。长度可以是0到65,535个字符(MySQL 5.0.3+)。",TINYTEXT:"一个最大长度255个字符的字符串。",TEXT:"最大长度为65535个字符的字符串。",MEDIUMTEXT:"最大长度为16,777,215个字符的字符串。",LONGTEXT:"最大长度为4,294,967,295个字符的字符串。",BOOLEAN:"是或否。分别保存为1或0",TINYINT:"一个整数。若带符号(允许负值)长度为-128到127，否则最大长度为255",SMALLINT:"一个整数。若带符号时(允许负值)长度为-32,768到32,767，否则最大值为65,535",MEDIUMINT:"一个整数。若带符号时(允许负值)长度为-8,388,608到8,388,607，否则最大值为16,777,215",INT:"一个整数。若带符号时(允许负值)长度为-2,147,483,648到2,147,483,647，否则最大值为4,294,967,295",BIGINT:"一个整数。若带符号时(允许负值)长度为-9,223,372,036,854,775,808到9,223,372,036,854,775,807，否则最大值为18,446,74,073,709,551,615",DECIMAL:"一个精确的数字(例如:货币)，长度为1至65位(L)，小数为0至30位(D)。长度格式:`L,D`",FLOAT:"一个估算的二进制数，4字节，带一个浮点小数点。",DOUBLE:"一个估算的二进制数，8字节，带一个浮点小数点。",DATE:"一个日期，`1000-01-01`到'9999-12-31`。",DATETIME:"一个日期和时间。允许 `1000-01-01 00:00:00` 至 `9999-12-31 23:59:59`。",TIMESTAMP:"日期和时间。允许 `1970-01-01 00:00:01` UTC 至 `2038-01-19 03:14:07` UTC.",TIME:"一个时间。允许 `-838:59:59` 至 `838:59:59`.",YEAR:"一年。允许 `1901` 至 `2155` 或 `0000`"}},date_and_time:"日期和时间",db_user:"数据库用户",db_password:"数据库用户密码",db_name:"数据库名称",db_type:"数据库类型",db_column_name:"数据库字段名...",db_updated:"数据库更新成功",db_update_failed:"数据库无法更新。",default:"默认",delete:"删除",delete_are_you_sure:"您确定要删除此条数据吗? 此操作无法撤消。",delete_collection_are_you_sure:"您确定要删除此项集合吗? 此操作无法撤消。",delete_field_are_you_sure:'您确定要删除字段 "{field}" 吗? 此操作无法撤消。',delete_role_are_you_sure:'您确定要删除角色 "{name}"? 此操作无法撤消。',delete_bookmark:"删除书签",delete_bookmark_body:"你确定要删除这个书签吗? 此操作无法撤销。",description:"描述",delete_confirmation:"确认删除",dialog_beginning:"对话框窗口开始。",discard_changes:"不保存修改并离开此页",display_name:"显示名称",drop_files:"不能拖放多个文件 | 拖放单个文件到此处... | 拖放多个文件到此处...",dont_show:"不显示",editing:"编辑数据: {collection}",editing_item:"正在编辑数据",editing_items:"批量编辑 {count} 条数据",editing_single:"正在编辑 {collection}",email_address:"邮箱地址",email:"邮箱",empty_collection:"集合还是空空的",empty_collection_body:"噢！当前集合中还没有数据存在，快去新建一条吧",enable_manual_sorting:"启用手动排序",enter_value:"输入值",enter_collection_name:"输入集合名...",enter_role_name:"输入角色名...",environment:"环境",project_key:"项目密钥",errors:{"-1":"无法访问API",11:"无法连接数据库",100:"错误的用户名和/或密码",101:"由于长时间非活动状态而注销",102:"由于长时间非活动状态而退出",103:"用户处于非活动状态",106:"错误的用户名和/或密码",107:"找不到用户"},error_unknown:"未知错误。请稍后再试。",esc_cancel:"Escape 将取消并关闭窗口。",equal_to:"等于",existing:"已上传的文件",fetching_data:"正在获取数据",field:"字段",field_type:"字段类型",field_created:"{field} 字段已创建",field_updated:"{field} 字段已更新",field_removed:"{field} 字段已移除",fields:"字段",fields_are_saved_instantly:"立即保存修改",file:"文件",file_library:"文件管理",file_upload:"上传单个或多个文件",forgot_password:"忘记密码",greater_than_equal:"大于或等于",greater_than:"大于",help_and_docs:"帮助文档",keep_editing:"继续编辑此页",hidden_detail:"隐藏于详情",hidden_browse:"隐藏于浏览",host:"主机",in_list:"其中之一",initial_schema:"选择一个初始化模式",initial_schema_copy:"从现有的数据库架构中选择，或者重新开始。你可以在以后扩展和调整它。",interface:"界面接口",interface_count:"暂未创建界面接口 | 一个界面接口 | {count} 个项界面接口",interfaces:"界面接口",info:"更多信息",intelligent_defaults:"高级选项可让您配置数据在数据库中的存储方式，并调整其他应用程序设置。",interface_settings:"每个界面接口都可以完美地满足你的需求。以下是该接口的可用选项，但只有一些是必需的。",install:"安装",install_copy:"此API尚未设置。您要立即安装和配置吗？",is_empty:"空",is_not_null:"为NULL",is_null:"不为NULL",item_count:"暂无数据 | 找到一条数据 | 找到 {count} 条数据",event_count:"暂无事件 | 一个事件 | {count} 个事件",role_count:"暂未创建角色 | 一个角色 | {count} 个角色",item_count_filter:"无筛选数据 | 筛选到一条数据 | 筛选到 {count} 条数据",item_deleted:"数据已删除",item_saved:"保存成功 | {count} 项 保存成功",junction_collection:"交叉集合",cant_disable_primary:"您无法在已有的字段上禁用主键。请改为删除此字段。",extension_error:"加载{ext}扩展名时出现问题。",extensions_missing:"找不到扩展",extensions_missing_copy:"确保已经安装了系统扩展。",latency:"延迟",learn_more:"了解更多",leave_comment:"留下注释...",length:"长度",length_disabled_placeholder:"长度由数据类型决定",less_than_equal:"小于或等于",less_than:"小于",limited:"Limited",loading:"正在载入...",loading_more:"加载更多数据...",login:"登录",m2m:"多对多（M2M）",m2o:"多对一（M2O）",o2m:"一对多（O2M）",name:"名称",name_field:"让我们为这个{field}字段命名并为用户添加一个有用的注释。",navigate_changes:"你确定要离开当前页面吗？如果您离开此页面，您所做的更改将会丢失。",new:"新建",new_file:"上传新文件",no_related_entries:"没有相关条目",not_between:"不介于",not_contains:"不包含",note:"注解",note_note:"note_note：“内部描述...",note_hidden:"[了解更多](https://docs.directus.io/app/admin/collections.html#hidden)",note_icon:"应用程序导航侧栏中显示的图标",note_managed:"[了解更多](https://docs.directus.io/app/admin/collections.html#managing-collections)",note_single:"[了解更多](https://docs.directus.io/app/admin/collections.html#single)",no_results:"找不到查询结果",no_results_body:"当前筛选项未匹配到相关的内容，请更改筛选项后重试。",no_collections:"没有集合配置",no_collections_body:"似乎尚未配置过任何集合",no_fields:"没有字段配置",no_fields_body:"似乎此集合尚未配置过任何字段",no_files:"没有文件",no_files_body:"似乎尚未上传任何文件",numeric:"数字",page_not_found:"找不到页面",page_not_found_body:"您正在寻找的页面似乎不存在。",permissions:"权限",name_bookmark:"你想给此书签取个什么名字呢？",next:"下一条",none:"无",not_empty:"不是空的",not_equal_to:"不等于",not_in_list:"不是其中之一",no_interface_error:"字段 {field} 尚未配置过界面接口",manage:"管理",max_size:"最大限制: {size}",max_one_primary_key:"每个集合只能有一个主键字段",dont_manage:"不要管理",dont_manage_copy:"即将永久删除 {collection}集合的权限、首选项和设置! 你确定吗?",more_options:"更多选项",mixed:"混合",my_profile:"我的资料",other:"其他",ok:"OK",operator:"运营商",open_on_gh:"在GitHub上反馈",options:"选项",password:"密码",password_reset_sent:"密码重置电子邮件发送到{email}",permissions_no_collections:"这个项目还没有任何集合。",permissions_admin:"默认情况下，管理员可以访问系统中的所有托管数据。",permission_states:{none:"无",mine:"仅限我的",role:"仅限角色",full:"所有",read:"只读",create:"创建",on_create:"在创建操作上",update:"更新",on_update:"在更新操作上",always:"总是"},popular:"热门",powered_by_directus:"由Directus提供支持",preview_and_revert:"预览并恢复",primary_key:"主键",port:"端口",project:"项目",project_name:"项目名称",project_info:"项目信息",project_info_copy:"以下是关于您的项目的一些问题，包括您的第一位管理员的凭据。",read:"查看",readable_fields:"可查看的字段",readable_fields_copy:"选择用户可以查看的字段",readonly:"只读",relational:"相关的",report_issue:"问题报告",request_feature:"功能建议",regex:"正则表达式",relation_setup:"由于这是一个关系字段，我们需要映射相关字段。",relation_setup_copy:"存在多个不同的类型关系数据，此界面接口使用的关系名为 {relationship}。",related_entries:"有相关条目",related_collection:"相关集合",remove:"移除",remove_related:"移除关联项",relationship:"关联",required:"必填",reset_preferences:"重置所有列表首选项",reset_password:"重置密码",revert:"还原",revert_copy:"你想将这个项目恢复为{date}的状态吗？",roles:"用户角色",role_settings:"角色设置",save:"保存",save_and_add:"保存并创建新的",save_and_stay:"保存并继续",save_as_copy:"另存为",save_as_bookmark:"另存为书签",schema:"Schema",search:"搜索",select_from_device:"从设备中选择",select_existing:"选择现有",select_field:"选择一个字段",select_fields:"选择字段",search_interface:"搜索界面接口...",select_interface_below:"在下面选择一个界面接口",select_statuses:"选择状态",select_statuses_copy:"选择用户可以使用的状态",settings:"设置",settings_project:"项目设置",settings_global:"全局设置",settings_update_database:"升级数据库",settings_update_database_subtext:"运行脚本",settings_update_database_confirm:"此操作将会使数据库的系统字段更新为Directus的最新版本。请务必在运行此操作之前进行数据库备份。",settings_collections_fields:"集合与字段",settings_permissions:"角色与权限",settings_extensions:"Extensions",settings_saved:"设置保存成功",server_details:"服务器详情",server_error:"服务器错误",server_error_copy:"当前实例的服务器或数据库出错。",server_trouble:"服务器故障",server_trouble_copy:"请稍后再试，或联系您的系统管理员帮助。",advanced_options:"高级选项",show_directus_collections:"显示Directus系统集合",something_went_wrong:"出了点问题。",something_went_wrong_body:"处理请求出现故障。请刷新页面后再试一次。",sign_in:"登录",signing_in:"正在登录",sign_out:"退出登录",sign_out_confirm:"您确定要退出登录吗?",sign_out_confirm_edits:"您确定要退出登录吗? 所有未保存的操作都会丢失噢。",text:"文字",this_collection:"此集合",to:"到",unsaved_changes_copy:"您的修改尚未保存! 请问您要离开当前页面吗?",user_directory:"用户列表",update:"更新",update_confirm:"您确定要更新 {count} 个项目吗?",unique:"唯一",user_edit_warning:"{first_name} {last_name}也正在编辑此项目。请与他们协调，以免丢失您的更改。",value:"值",values:"值",validation:"验证",version:"版本",version_and_updates:"版本与升级",view_type:"查看为...",welcome:"欢迎",writable_fields:"可写字段",writable_fields_copy:"选择用户可以编辑的字段",yes:"是的",duplicating_field:"正在复制字段",duplicate:"复制","Action by":"操作员","Action on":"操作于",Action:"操作","Auto Sign out":"超时退出分钟数",Collection:"集合","Edited on":"编辑于","Email Notifications":"邮件通知","External ID":"外部ID","First Name":"姓氏","Last Access on":"最后登录于","Last Name":"名字","Last Page":"最后访问","Locale Options":"本地化选项","User Agent":"浏览器信息",Activity:"操作记录",Article:"资讯",Avatar:"头像",Company:"公司",Content:"内容",Email:"邮箱",Explain:"说明",Fields:"字段",Filename:"文件名",Image:"图片",Item:"数据量",Locale:"语言",Logo:"标志",Name:"名称",Password:"密码",Roles:"角色",Status:"状态",Storage:"储存",Strategy:"策略",Timezone:"时区",Title:"标题",Token:"令牌",Type:"类型"}}}]);
//# sourceMappingURL=lang-zh-CN.5ac7c1c0.js.map