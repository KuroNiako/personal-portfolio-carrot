import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
// import arrow1 from "../assets/img/arrow1.svg";
// import arrow2 from "../assets/img/arrow2.svg";
// import colorSharp from "../assets/img/color-sharp.png"

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2>关于我的技能</h2>
                        <p>作为在校学习的途中，我侧重于前端的学习，正逐渐掌握掌握TypeScript、Vue、React.js、Node.js等前端技术，<br />在设计前端页面途中，我也养成了一定的审美能力，并具有一定的平面设计 / UI 设计经验。<br/>
                            同时，我也熟悉后端的开发，掌握了Java、Maven、Spring Boot等后端技术与MySQL等数据库的使用。<br />
                            我也有着良好的团队合作精神，能够与其他优秀的同学合作，共同完成项目
                        </p>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                            <div className="item">
                                <img src={meter1} alt="Image" />
                                <h5>Web 开发</h5>
                            </div>
                            <div className="item">
                                <img src={meter2} alt="Image" />
                                <h5>后端 开发</h5>
                            </div>
                            <div className="item">
                                <img src={meter3} alt="Image" />
                                <h5>平面设计 / UI 设计</h5>
                            </div>
                            <div className="item">
                                <img src={meter1} alt="Image" />
                                <h5>团队协作力</h5>
                            </div>
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}
