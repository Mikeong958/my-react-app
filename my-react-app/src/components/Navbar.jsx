import React, { useState } from "react"
import { Link, useLocation } from "react-router-dom"


export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()

  const links = [
    { name: "Gallery", path: "/gallery" },
    { name: "About", path: "/about" },
    { name: "Shop", path: "/shop" },
  ]

  return (
    <nav
      style={{
        position: "sticky",
        top: 0,
        zIndex: 100,
        width: "22%",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "30px 60px",
        backgroundColor: "transparent", // 始终透明
        
      }}
    >
      {/* Logo */}
      <div style={{ marginTop: "20px", fontWeight: "bold", fontSize: "25px", cursor: "pointer" , padding:"10px" , fontFamily: "'Fira Sans', sans-serif"}}>
        ArtGallery
        <div
    style={{
      fontSize: "14px",
      fontFamily: "'Montserrat', sans-serif",
      fontWeight: 400,
      color: "#666",
      marginTop: "2px", // 与主标题间距
      letterSpacing: "0.5px",
    }}
  >
    Mike
  </div>
      </div>
      
      {/* 大屏幕菜单 */}
      <div
        className="desktop-menu"
        style={{
          display: "flex",
          gap: "12px", // 缩小间距
          fontSize: "14px",
        }}
      >
        {links.map((link) => (
          <Link
            key={link.path}
            to={link.path}
            style={{
              textDecoration: "none",
              color: location.pathname === link.path ? "#1d1d1d" : "#828282",
              fontWeight: location.pathname === link.path ? "bold" : "500",
              padding: "5px 8px",
              borderRadius: "4px",
              transition: "all 0.2s",
            }}
          >
            {link.name}
          </Link>
        ))}
      </div>

      {/* 汉堡菜单：小屏幕 */}
      <div
        className="mobile-menu"
        style={{
          display: "none",
          cursor: "pointer",
          flexDirection: "column",
          gap: "4px",
        }}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <div
          style={{
            width: "20px",
            height: "2px",
            backgroundColor: "#333",
            transform: menuOpen ? "rotate(45deg) translateY(6px)" : "none",
            transition: "all 0.3s",
          }}
        />
        <div
          style={{
            width: "20px",
            height: "2px",
            backgroundColor: "#333",
            opacity: menuOpen ? 0 : 1,
            transition: "all 0.3s",
          }}
        />
        <div
          style={{
            width: "20px",
            height: "2px",
            backgroundColor: "#333",
            transform: menuOpen ? "rotate(-45deg) translateY(-6px)" : "none",
            transition: "all 0.3s",
          }}
        />
      </div>

      {/* 移动菜单展开 */}
      {menuOpen && (
        <div
          style={{
            position: "absolute",
            top: "50px",
            right: "30px",
            backgroundColor: "white",
            padding: "10px 15px",
            boxShadow: "0 2px 10px rgba(0,0,0,0.15)",
            borderRadius: "6px",
            display: "flex",
            flexDirection: "column",
            gap: "10px",
            fontSize: "14px",
          }}
        >
          {links.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={() => setMenuOpen(false)}
              style={{
                textDecoration: "none",
                color: location.pathname === link.path ? "#acacac" : "#333",
                fontWeight: location.pathname === link.path ? "bold" : "500",
              }}
            >
              {link.name}
            </Link>
          ))}
        </div>
      )}

      {/* 简单媒体查询 */}
      <style>
        {`
          @media (max-width: 768px) {
            .desktop-menu { display: none; }
            .mobile-menu { display: flex; }
          }
        `}
      </style>
    </nav>
  )
}
