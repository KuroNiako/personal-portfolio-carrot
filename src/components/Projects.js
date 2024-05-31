import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import projImg4 from "../assets/img/project-img4.png";
import projImg5 from "../assets/img/project-img5.png";
import projImg6 from "../assets/img/project-img6.png";
import hobbyImg1 from "../assets/img/hobby-img1.png";
import hobbyImg2 from "../assets/img/hobby-img2.png";
import hobbyImg3 from "../assets/img/hobby-img3.png";
import hobbyImg4 from "../assets/img/hobby-img4.png";
import hobbyImg5 from "../assets/img/hobby-img5.png";
import hobbyImg6 from "../assets/img/hobby-img6.png";
import lifeImg1 from "../assets/img/life-img1.jpg";
import lifeImg2 from "../assets/img/life-img2.jpg";
import lifeImg3 from "../assets/img/life-img3.jpg";
import lifeImg4 from "../assets/img/life-img4.png";
import lifeImg5 from "../assets/img/life-img5.png";
import lifeImg6 from "../assets/img/life-img6.jpg";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
// import PreviewImages from "./PreviewImage";
import {useState} from "react";

export const Projects = () => {

  // const [show, setShow] = useState(false)
  // const [index, setIndex] = useState(0)
  const projects = [
    {
      title: "个人介绍页面",
      description: "基于 React 技术开发",
      imgUrl: projImg1,
    },
    {
      title: "“放心吃”前端页面",
      description: "UI设计，基于Vue3 + Vite + Vuetify 开发",
      imgUrl: projImg2,
    },
    {
      title: "“放心吃”前端页面",
      description: "基于Vue3 + Vite + Vuetify 开发与前后端联调",
      imgUrl: projImg3,
    },
    {
      title: "《极音 电子音乐节（假定）》海报",
      description: "PS 图像处理课程结课作品",
      imgUrl: projImg4,
    },
    {
      title: "视频封面其一",
      description: "用于 Bilibili 投稿",
      imgUrl: projImg5,
    },
    {
      title: "视频封面其二",
      description: "用于 Bilibili 投稿",
      imgUrl: projImg6,
    },
  ];

  // const hobbiesImg = [{src: hobbyImg1}, {src: hobbyImg2}, {src: hobbyImg3}];

  const hobbies = [
    {
      title: "音律炫动",
      description: "最近在玩",
      imgUrl: hobbyImg1,
    },
    {
      title: "中二节奏",
      description: "好久不玩",
      imgUrl: hobbyImg2,
    },
    {
      title: "真女神转生 V Vengeance",
      description: "还没发售但是想要",
      imgUrl: hobbyImg3,
    },
    {
      title: "世界计划 缤纷舞台！ feat.初音未来",
      description: "对，节奏大师",
      imgUrl: hobbyImg4,
    },
    {
      title: "女神异闻录 3 Reload",
      description: "没时间玩",
      imgUrl: hobbyImg5,
    },
    {
      title: "女神异闻录 5 Royal",
      description: "堂堂通关（大半年前）",
      imgUrl: hobbyImg6,
    },
  ];

  const lifes = [
    {
      title: "酉阳之旅其一",
      description: "桃花园中的小小学堂",
      imgUrl: lifeImg1,
    },
    {
      title: "酉阳之旅其二",
      description: "酉阳古镇庭院",
      imgUrl: lifeImg2,
    },
    {
      title: "酉阳之旅其三",
      description: "太古洞钟乳石奇观",
      imgUrl: lifeImg3,
    },
    {
      title: "某一天的午饭",
      description: "蜜汁叉烧饭",
      imgUrl: lifeImg4,
    },
    {
      title: "游玩音乐游戏",
      description: "截图成绩一则",
      imgUrl: lifeImg5,
    },
    {
      title: "朋友们的聚餐",
      description: "菠萝咕咾肉（?）",
      imgUrl: lifeImg6,
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>作品集以及一些小爱好</h2>
                <p>
                  以下的展示网格展示了我在学习中做过的一些有趣的项目，以及我在生活中的一点点小乐趣
                </p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">作品集</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">爱好</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">日常</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <p>
                        在大学学习途中，开发 / 设计的一些比较精美的项目
                      </p>
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                              />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                      <p>
                        学习之余最大的爱好就是玩游戏，喜欢的游戏类型是MUG/RPG
                      </p>
                      <Row>
                        {
                          hobbies.map((hobby, index) => {
                            return (
                                <ProjectCard
                                    key={index}
                                    // onClick={() => setShow(true)}
                                    {...hobby}
                                />
                            )
                          })
                        }
                      </Row>
                      {/*<PreviewImages*/}
                      {/*    show={show}*/}
                      {/*    toggle={() => setShow(!show)}*/}
                      {/*    images={hobbiesImg}*/}
                      {/*    index={index}*/}
                      {/*    nextIndex={() => setIndex(index + 1)}*/}
                      {/*    prevIndex={() => setIndex(index - 1)}*/}
                      {/*/>*/}
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p>
                        记录了我的日常生活
                      </p>
                      <Row>
                        {
                          lifes.map((life, index) => {
                            return (
                                <ProjectCard
                                    key={index}
                                    {...life}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
