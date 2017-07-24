import React, { Component } from 'react';
import { Link } from 'react-router';

import { Header } from '../components/Header';

const IMAGES = [
  'http://desk.fd.zol-img.com.cn/t_s960x600c5/g5/M00/01/0E/ChMkJ1bKwZ6IbJp_ACmCEdGWqeUAALGbAHovfMAKYIp986.jpg',
  'http://desk.fd.zol-img.com.cn/t_s960x600c5/g5/M00/01/0E/ChMkJ1bKwaCIdsqAADlmmVtRqIkAALGbQAusgMAOWax268.jpg',
  'http://desk.fd.zol-img.com.cn/t_s960x600c5/g5/M00/01/0E/ChMkJlbKwZ6IFQUYAC_cPUA46YwAALGbAISQBwAL9xV007.jpg',
  'http://desk.fd.zol-img.com.cn/t_s960x600c5/g5/M00/01/0E/ChMkJ1bKwZ-IT2YyADpZpd0OkE4AALGbAKtSBsAOlm9526.jpg',
  'http://desk.fd.zol-img.com.cn/t_s960x600c5/g5/M00/01/0E/ChMkJ1bKwZ-IDKWyAFkUWt1zmNkAALGbAMX2Z8AWRRy156.jpg',
  'http://desk.fd.zol-img.com.cn/t_s960x600c5/g5/M00/01/0E/ChMkJ1bKwZ6IZdumAFb-YTf_-L8AALGbAJFoEoAVv55114.jpg',
  'http://desk.fd.zol-img.com.cn/t_s960x600c5/g5/M00/01/0E/ChMkJlbKwZ-IdHJlAED191rH9ngAALGbAN4tY0AQPYP926.jpg',
  'http://desk.fd.zol-img.com.cn/t_s960x600c5/g5/M00/01/0E/ChMkJlbKwZ-IQdRDAD1-Jbgi_mQAALGbAO6k8AAPX49757.jpg',
  'http://desk.fd.zol-img.com.cn/t_s960x600c5/g5/M00/01/0E/ChMkJlbKwaCIFDERACeKo5uNoqoAALGbQAHJ0gAJ4q7196.jpg',
  'http://desk.fd.zol-img.com.cn/t_s960x600c5/g5/M00/01/0E/ChMkJlbKwaCIEEocABNy72OgVrAAALGbQBoGLQAE3MH979.jpg'
]

const SENTS = [
  '真正的才智是刚毅的志向。 —— 拿破仑',
  '感情有着极大的鼓舞力量，因此，它是一切道德行为的重要前提，谁要是没有强烈的志向，也就不能够热烈地把这个志向体现于事业中。 —— 凯洛夫',
  '勇敢坚毅真正之才智乃刚毅之志向。 —— 拿破仑',
  '生活赋予我们一种巨大的和无限高贵的礼品，这就是青春：充满着力量，充满着期待志愿，充满着求知和斗争的志向，充满着希望信心和青春。 —— 奥斯特洛夫斯基',
  '志向不过是记忆的奴隶，生气勃勃地降生，但却很难成长。 —— 莎士比亚',
  '人所缺乏的不是才干而是志向，不是成功的能力而是勤劳的意志。 —— 部尔卫',
  '当教师把每一个学生都理解为他是一个具有个人特点的、具有自己的志向、自己的智慧和性格结构的人的时候，这样的理解才能有助于教师去热爱儿童和尊重儿童。 —— 赞科夫',
  '人的理想志向往往和他的能力成正比。 —— 约翰逊',
  '志向和热爱是伟大行为的双翼。 —— 歌德'
]

export class Home extends Component {

  constructor(props) {
    super(props);
    this.state = {
      image: IMAGES[parseInt(Math.random()*IMAGES.length)],
      sent: SENTS[parseInt(Math.random()*SENTS.length)]
    };
  }

  render() {
    let { image, sent } = this.state;
    return (
      <div className="con">
        <Header />
        <p className="sent">{sent}</p>
        <div className="background" style={{backgroundImage: 'url(' + image + ')'}}></div>
      </div>
    )
  }
}