'use strict';
import React from 'react';
import List from './List/List';
// import QueryForm from './QueryForm/QueryForm';
import Fetcher from './Fetcher';
import style from './index.less';
import { Modal, Drawer } from 'antd';
// import { everyContentType } from '@/components/everyContentType';
import Empty from '../../common/Empty/Empty';
import SettleDetail from '../settleDetail/index';
import getUrlSearchObj from '@/util/getURLSearchObj';
import { connect } from 'dva';

const Fragment = React.Fragment;

@connect(({ global }) => {
  const { context, nowCategory } = global;
  return { context, nowCategory };
})
export default class SettleList extends React.Component {
  constructor(props) {
    super(props);
    const { id, showId, showName, drawerVisible } = getUrlSearchObj();
    const { openCategory } = props.nowCategory;
    const context = props.context;
    const user = context.loginUser;
    // 获取通用用户权限数组
    // this.categoryArr = [];
    // everyContentType.map(item => {
    //   item.permission &&
    //     item.permission.navPayment &&
    //     user[item.contextName] &&
    //     user[item.contextName].auditStatus &&
    //     this.categoryArr.push(item);
    // });
    this.state = {
      loading: false,
      listData: [], // 列表数据
      queryValues: {
        id,
        showId,
        showName,
        openCategory: openCategory || 96,
      }, // 查询参数
      pageNo: 1, // 页码
      pageSize: 9, // 每页显示个数
      total: 0, // 搜索到的总数
      unpublished: 0, // 未发布数
      haveSearched: false,
      drawerVisible: drawerVisible || false,
      hasAccount: 1,
      // openCategoryMenu: []
      // everyIsNum: false // 是否每一项收益都小于0
    };
  }

  componentDidMount() {
    this.getList();
    //TODO:
    // if (this.state.listData.length === 0) this.chooseTab(0)
  }

  // handleOpenCategoryMenuChange = (openCategoryChecked, openCategoryMenu) => {
  //   let { queryValues } = this.state;
  //   queryValues.openCategory = openCategoryChecked;
  //   this.setState(
  //     {
  //       listData: [],
  //       queryValues,
  //       pageNo: 1,
  //       openCategoryMenu
  //     },
  //     () => {
  //       this.getList();
  //       // this.childQuery&&this.childQuery.handleReset();
  //     }
  //   );
  // };

  chooseTab = hasAccount => {
    const { queryValues, pageSize } = this.state;
    this.getList(queryValues, pageSize, 1, hasAccount);
    this.setState({ pageNo: 1, hasAccount });
  };

  // 获取列表数据
  getList = (
    queryValues = this.state.queryValues,
    pageSize = this.state.pageSize,
    pageNo = this.state.pageNo,
    hasAccount = this.state.hasAccount
  ) => {
    this.setState({ loading: true });
    Fetcher.getOnlinePlayList({
      openCategory: queryValues.openCategory,
      hasAccount,
      pageSize,
      pageNo,
    }).then(res => {
      if (res.success !== true) {
        Modal.error({ title: '接口出错', content: '获取列表数据出错，' + res.message });
        this.setState({ loading: false });
        return;
      }
      // let everyIsNum = res.data.data
      //   ? res.data.data.every(s => {
      //       return s.totalIncome ? s.totalIncome <= 0 : true;
      //     })
      //   : true; // 每一项收益是否都小于0,true代表都小于0或无收益
      this.setState(
        {
          loading: false,
          listData: res.data && res.data.data ? res.data.data : [],
          total: res.data && res.data.total ? res.data.total : [],
          queryValues,
          pageNo,
          pageSize,
          // everyIsNum
        },
        () => {
          this.setHistory();
        }
      );
    });
  };

  // 编辑列表项，修改 history，使得返回时能保留页面当前的状态
  setHistory = () => {
    const { pageNo, queryValues, drawerVisible } = this.state;
    history.replaceState(
      '',
      '',
      location.origin +
      location.pathname +
      '?pageNo=' +
      pageNo +
      (queryValues.id ? '&id=' + encodeURIComponent(queryValues.id) : '') +
      (queryValues.showId ? '&showId=' + encodeURIComponent(queryValues.showId) : '') +
      (queryValues.showName ? '&showName=' + encodeURIComponent(queryValues.showName) : '') +
      (queryValues.openCategory
        ? '&openCategory=' + encodeURIComponent(queryValues.openCategory)
        : '') +
      (drawerVisible ? '&drawerVisible=' + encodeURIComponent(drawerVisible) : '')
    );
  };

  // 选择品类
  // changeCategory = openCategory => {
  //   const queryValuesNew = { id: '', showId: '', showName: '', openCategory };
  //   this.setState({ listData: [], queryValues: queryValuesNew, pageNo: 1, pageSize: 9 }, () => {
  //     this.getList(queryValuesNew, 9, 1);
  //   });
  // };

  // 处理表格页码变化
  handlePageChange = pageNo => {
    const { pageSize, queryValues } = this.state;
    this.setState({ pageNo });
    this.getList(queryValues, pageSize, pageNo);
  };

  // 处理每页显示个数变化
  handleShowSizeChange = (pageNo, pageSize) => {
    const { queryValues } = this.state;
    this.setState({ pageNo, pageSize });
    this.getList(queryValues, pageSize, pageNo);
  };

  handleSettleDetail = projectInfo => {
    const queryValues = {
      id: projectInfo.id,
      showId: projectInfo.showId,
      showName: projectInfo.showName,
      openCategory: projectInfo.copCategory,
    };
    this.setState({ drawerVisible: true, queryValues }, () => {
      this.setHistory();
    });
  };

  handleDrawerCancel = () => {
    this.setState({ drawerVisible: false }, () => {
      this.setHistory();
    });
  };

  render() {
    const {
      loading,
      listData,
      pageNo,
      pageSize,
      total,
      haveSearched,
      drawerVisible,
      queryValues,
      hasAccount,
    } = this.state;
    console.log(hasAccount, 'hasAccountJA');
    console.log(listData, 'listDataJA');
    const scrollY = document.body.clientHeight - (50 + 87 + 53 + 1 + 32 + 16 * 2);
    return (
      <div
        className={style.settleListWrap}
        style={{ height: (!listData || listData.length === 0) && 400 }}
      >
        <div className={style.listTab}>
          <div className={`${style.tab} ${!hasAccount && style.choose}`} onClick={() => this.chooseTab(0)}>全部节目</div>
          <div className={`${style.tab} ${hasAccount && style.choose}`} onClick={() => this.chooseTab(1)}>
            有账单节目
          </div>
        </div>
        {/* 多分类 */}
        {/* <div className={style.list_title}>
          {this.categoryArr.map((item, index) => (
            <div
              key={index}
              className={style.list_everyCategory}
              style={{ color: +item.openCategory === +queryValues.openCategory ? '#FE5280' : '#666F80' }}
              onClick={() => {
                this.changeCategory(item.openCategory);
              }}
            >
              <span>{item.chName}</span>
            </div>
          ))}
        </div> */}
        {!listData || listData.length === 0 ? (
          <Fragment>
            {haveSearched ? (
              <Empty
                loading={loading}
                text="没有符合条件的搜索结果，请重新调整搜索关键词"
                height={400}
              />
            ) : (
              <Empty
                loading={loading}
                text="您还没有已上线项目或项目暂无收益，请多多上传并分发作品~"
                height={400}
              />
            )}
          </Fragment>
        ) : (
          <List
            loading={loading}
            scrollY={scrollY}
            rowKey="id"
            data={listData}
            pageSize={pageSize}
            pageNo={pageNo}
            total={total}
            // hasAccount={hasAccount}
            onPageChange={this.handlePageChange}
            onShowSizeChange={this.handleShowSizeChange}
            onSettleDetail={this.handleSettleDetail}
          // onChooseTab={this.chooseTab}
          />
        )}
        {drawerVisible && (
          <Drawer
            width={1000}
            placement="right"
            closable={false}
            onClose={this.handleDrawerCancel}
            visible={drawerVisible}
            className="drawerPageWrap"
          >
            <SettleDetail
              key={queryValues.id}
              id={queryValues.id}
              showId={queryValues.showId}
              showName={queryValues.showName}
              type={queryValues.openCategory}
            />
          </Drawer>
        )}
      </div>
    );
  }
}
