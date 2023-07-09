import SingleStatisticCard from "./SingleStatisticCard/SingleStatisticCard";
import { StatisticsContainer } from "./StatisticsStyle";
const Statistics = () => {
  const statisticsDatas = [
    {
      image:
        "https://demo.htmlcodex.com/2597/free-cryptocurrency-website-template/img/icon-9.png",
      value: "123456",
      subTitle: "Today Transactions",
    },
    {
      image:
        "https://demo.htmlcodex.com/2597/free-cryptocurrency-website-template/img/icon-10.png",
      value: "123456",
      subTitle: "Monthly Transactions",
    },
    {
      image:
        "https://demo.htmlcodex.com/2597/free-cryptocurrency-website-template/img/icon-2.png",
      value: "123456",
      subTitle: "Total Transactions",
    },
  ];
  return (
    <div className="py-5">
      <StatisticsContainer className="container py-5 rounded">
        <div className="row">
          {
            statisticsDatas.map((statisticsData, index) => <SingleStatisticCard key={index} statisticsData = {statisticsData} />)
          }
        </div>
      </StatisticsContainer>
    </div>
  );
};

export default Statistics;
