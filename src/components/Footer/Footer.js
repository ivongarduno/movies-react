import React from "react";
import { Layout } from "antd";
import { LinkedinFilled, GithubFilled } from "@ant-design/icons";

import "./Footer.scss";

export default function Footer() {
  const { Footer } = Layout;

  return (
    <Footer className="footer">
      <p>Created with much love by Blanca Ivon Garduño</p>
      <div className="footer__social-media">
        <a href="https://www.linkedin.com/in/ivongarduno/" target="_blank">
          <LinkedinFilled twoToneColor="#fffff" />
        </a>
        <a href="https://github.com/ivongarduno" target="_blank">
          <GithubFilled />
        </a>
      </div>
    </Footer>
  );
}
