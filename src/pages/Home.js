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

export class Home extends Component {

  constructor(props) {
    super(props);
    this.state = {
      image: IMAGES[parseInt( Math.random()*IMAGES.length)]
    };
  }

  render() {
    let { image } = this.state;
    return (
      <div>
        <Header />
        <div className="background" style={{backgroundImage: 'url(' + image + ')'}}></div>
      </div>
    )
  }
}