"use client";
import "./page.css";

import { useState } from "react";

export default function support() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    description: "",
    screenshot: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("/api/hello", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Failed to submit form");
      }

      setFormData({
        name: "",
        email: "",
        description: "",
        screenshot: "",
      });

      console.log("Form submitted successfully");
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <>
      <h1>도움이 필요하십니까?</h1>
      <p>
        어떤 도움이 필요하신지 알려주시면 24시간 이내에 신속히 처리해
        드리겠습니다.
      </p>
      <form onSubmit={handleSubmit}>
        <div className="flex">
          <p>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="이름"
            />
          </p>
          <p>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="이메일"
            />
          </p>
        </div>

        <p>
          <textarea
            name="description"
            rows="5"
            value={formData.description}
            onChange={handleChange}
            placeholder="도움이 필요한 내용을 입력하세요"
          ></textarea>
        </p>
        <p>
          <input
            type="file"
            name="screenshot"
            accept="png, jpg"
            onChange={handleChange}
          />
        </p>
        <p>
          <input type="submit" value="제출" />
        </p>
      </form>
    </>
  );
}
