import React, { useState, useEffect } from "react";
import { message, Spin, Popover, Col } from "antd";
import { ExclamationCircleFilled } from '@ant-design/icons';
import Empty from "@/components/Empty";
import FilterSelect from "@/components/FilterSelect";
import ChartLineSlider from "@/components/ChartLineSlider";
import CardWrap from "@/components/CardWrap";

import numberFormatter from "@/utils/numberFormatter";
import Fetcher from "@/utils/Fetcher";
import "../global.less";

const Data = (props) => {
  const { showId, onlineDate } = props;
  const [dateType, setDateType] = useState<any>(2);
  const [data, setData] = useState<any>([]);
  const [isLoading, setIsLoading] = useState(false);

  const getData = () => {
    setIsLoading(true);

    // console.log(99, showId);
    // console.log(88, dateType);
    // setTimeout(() => {
    //   setData(mockData.data);
    //   setIsLoading(false);
    // }, 2000);
    // return;
    Fetcher.getSearchData96({
      showId: showId,
      dateType: dateType == '4' ? '3' : dateType,
      version: 1
    })
      .then((resp) => {
        if (resp.success) {
          setData(resp.data);
        } else {
          message.error(`获取站内搜索数据错误,${resp.message}`);
        }
        setIsLoading(false);
      })
      .catch(() => {
        setIsLoading(false);
        message.error("获取站内搜索数据错误");
      });
  };

  useEffect(() => {
    if (showId) {
      getData();
    }
  }, [showId, dateType]);

  let dataSource = [];
  let total = 0;
  if (dateType === 2) {
    dataSource = data.map((item) => ({
      date: item.date,
      value: item.searchNum,
    }));
  } else if (dateType === 3) {
    dataSource = data.map((item) => ({
      date: item.relativeDate,
      value: item.searchNum,
    }));
  } else if (dateType == 4) {
    dataSource = data.filter(i => i.relativeDate >= -14 && i.relativeDate <= 31).map((item) => {
      total += item.searchNum;
      return ({
        date: item.relativeDate,
        value: item.searchNum,
      })
    });
  }

  dataSource = dataSource.sort(
    (a: any, b: any) => new Date(a.date).getTime() - new Date(b.date).getTime()
  );

  const formateAtDay = (yat) => {
    const at = Number(yat);
    if (at < 0) {
      return `上线前 ${at * -1} 天`;
    } else if (at > 0) {
      return `上线后 ${at} 天`;
    }
    return "-";
  };

  return (
    <Spin spinning={isLoading}>
      <CardWrap
        title={<>营销贡献指数

          {/* <Popover
            placement="right"
            content={
              <span>
                由优酷站内搜索结果的曝光量计算所得
              </span>
            }
          >

            <ExclamationCircleFilled className='ykcopData_labelIcon' />
          </Popover> */}
        </>}
        bodyStyle={{ padding: 0 }}
        rightRender={
          dateType == 4 ? <div style={{ color: '#666f80', fontSize: '12px' }}>
            上线90天累积数据：<span style={{ color: '#fe5280' }}>{total}</span>
          </div> : null
        }
        leftRender={
          <div style={{ overflow: "hidden" }}>
            <FilterSelect
              style={{ float: "right" }}
              options={[
                { label: "自然日期", value: 2 },
                { label: "相对日期", value: 3 },
                { label: "上线90天内", value: 4, disabled: !onlineDate },
              ]}
              handleClick={(i) => {
                setDateType(i.value);
              }}
              value={dateType}
            />
          </div>
        }
      >
        <CardWrap>
          {showId ? (
            <>
              {data && data.length ? (
                <ChartLineSlider
                  data={dataSource}
                  key={dateType}
                  showSlider={dateType != 4}
                  lineAdvanceProps={{
                    tooltip: [
                      "date*value",
                      (date, value) => {
                        return {
                          title: dateType !== 2 ? formateAtDay(date) : date,
                          name: '影响力指数',
                          value: numberFormatter(value),
                        };
                      },
                    ],
                  }}
                />
              ) : (
                <Empty text="暂无数据" height={400} />
              )}
            </>
          ) : (
            <Empty text="暂无数据" height={400} />
          )}
        </CardWrap>
      </CardWrap>
    </Spin>
  );
};

export default Data;
