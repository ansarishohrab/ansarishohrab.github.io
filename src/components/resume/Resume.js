import { useContext } from "react";
import { jsPDF } from "jspdf";
import html2canvas from "html2canvas";
import UIBorderArticle from "../shared/ui-border-article/UIBorderArticle";
import ProgressList from "./progress-list/ProgressList";
import TimelineList from "./timeline-list/TimelineList";
import { DataContext } from "../../store/DataContextProvider";

const Resume = () => {
  const { profile } = useContext(DataContext);

  const handleGeneratePDF = async () => {
    if (!profile) return;

    const contactHtml = profile?.contacts
      ?.map((contact) => `<span>${contact.value}</span>`)
      .join("");

    const skillsHtml = profile?.technologies
      ?.slice(0, 15)
      .map((technology) => `<span class="skill">${technology.title}</span>`)
      .join("");

    const languagesHtml = profile?.languages
      ?.map((lang) => `<li>${lang.title} – ${lang.subtext}</li>`)
      .join("");

    const educationHtml = profile?.educations
      ?.map(
        (education) => `
          <div class="education-card">
            <strong>${education.title}</strong>
            <br>
            ${education.description || ""}
            <br>
            ${education.timeline || ""}
          </div>
        `,
      )
      .join("");

    const experienceHtml = profile?.experiences
      ?.sort((a, b) => b.sortOrder - a.sortOrder)
      .map(
        (experience) => `
          <div class="item">
            <h4>${experience.title}</h4>
            <div class="timeline-date">${experience.timeline}</div>
            <p>${experience.description}</p>
          </div>
        `,
      )
      .join("");

    const projectsHtml = profile?.projects
      ?.map(
        (project) => `
            <div class="education-card">
              <strong>${project.title}</strong>
              ${project.description ? `<p>${project.description}</p>` : ""}
              ${project.url ? `<p><a href="${project.url}" target="_blank" rel="noreferrer">${project.url}</a></p>` : ""}
            </div>
          `,
      )
      .join("");

    const resumeHtml = `
      <div class="resume resume-pdf">
        <style>
          .resume-pdf *{margin:0;padding:0;box-sizing:border-box;}
          .resume-pdf{font-family:'Inter','Poppins',sans-serif;background:#eef4fb;color:#1f2937;padding:30px;}
          .resume-pdf .resume{max-width:940px;margin:auto;background:#ffffff;border-radius:30px;overflow:hidden;box-shadow:0 28px 65px rgba(15,23,42,0.12);border:1px solid rgba(15,23,42,0.08);}
          .resume-pdf .header{background:linear-gradient(135deg,#0f172a,#1e293b);color:#ffffff;padding:42px 44px 34px;}
          .resume-pdf .header h1{font-size:38px;font-weight:800;letter-spacing:-0.03em;line-height:1.02;margin-bottom:8px;}
          .resume-pdf .header h2{color:#93c5fd;font-size:18px;font-weight:500;margin:0;}
          .resume-pdf .summary{margin-top:20px;max-width:740px;font-size:14px;line-height:1.9;opacity:.92;color:#e2e8f0;}
          .resume-pdf .contact{display:flex;flex-wrap:wrap;gap:10px;margin-top:24px;}
          .resume-pdf .contact span{display:inline-flex;align-items:center;gap:.45rem;font-size:12.9px;color:#f8fafc;background:rgba(255,255,255,.14);padding:10px 14px;border-radius:999px;border:1px solid rgba(255,255,255,.18);}
          .resume-pdf .content{display:grid;grid-template-columns:minmax(280px,320px) 1fr;gap:30px;padding:36px 42px 42px;}
          .resume-pdf .sidebar{background:#f8fafc;padding:28px;border-radius:24px;border:1px solid rgba(15,23,42,0.06);}
          .resume-pdf .main{padding:0;}
          .resume-pdf .section{margin-bottom:34px;}
          .resume-pdf .section:last-child{margin-bottom:0;}
          .resume-pdf .section-title{font-size:14px;font-weight:700;margin-bottom:18px;color:#0f172a;position:relative;text-transform:uppercase;letter-spacing:.08em;}
          .resume-pdf .section-title::after{content:'';width:52px;height:4px;background:#60a5fa;position:absolute;bottom:-10px;left:0;border-radius:999px;}
          .resume-pdf .skill-tags{display:flex;flex-wrap:wrap;gap:10px;}
          .resume-pdf .skill{display:inline-flex;align-items:center;justify-content:center;background:#eff6ff;color:#1d4ed8;padding:8px 14px;border-radius:999px;font-size:13px;font-weight:600;border:1px solid rgba(59,130,246,.18);}
          .resume-pdf .languages{list-style:none;padding:0;margin:0;}
          .resume-pdf .languages li{font-size:14px;line-height:1.8;color:#334155;margin-bottom:10px;}
          .resume-pdf .education-card{background:#ffffff;padding:18px 20px;border-radius:20px;margin-bottom:14px;border:1px solid rgba(15,23,42,.06);box-shadow:0 10px 20px rgba(15,23,42,0.04);}
          .resume-pdf .education-card strong{display:block;font-size:15px;color:#0f172a;margin-bottom:8px;}
          .resume-pdf .education-card p{font-size:14px;line-height:1.75;color:#475569;margin:0;}
          .resume-pdf .education-card a{color:#2563eb;text-decoration:none;word-break:break-word;}
          .resume-pdf .education-card a:hover{text-decoration:underline;}
          .resume-pdf .timeline{position:relative;padding-left:24px;}
          .resume-pdf .timeline::before{content:'';position:absolute;left:10px;top:0;bottom:0;width:2px;background:linear-gradient(180deg, rgba(96,165,250,0.95) 0%, rgba(96,165,250,0.16) 100%);border-radius:999px;}
          .resume-pdf .item{position:relative;margin-bottom:30px;padding-left:20px;}
          .resume-pdf .item h4{color:#0f172a;font-size:15px;font-weight:700;margin-bottom:7px;}
          .resume-pdf .timeline-date{color:#64748b;font-size:13px;margin-bottom:10px;}
          .resume-pdf .item p{font-size:14px;line-height:1.85;color:#475569;margin:0;}
          .resume-pdf .footer{text-align:center;padding:18px 0 24px;margin-top:-8px;background:#f8fafc;color:#64748b;font-size:12px;}
        </style>
        <div class="header">
          <h1>${profile?.name}</h1>
          <h2>${profile?.title}</h2>
          <div class="summary">${profile?.presentations?.[0]}</div>
          <div class="contact">${contactHtml}</div>
        </div>
        <div class="content">
          <aside class="sidebar">
            <div class="section">
              <div class="section-title">Technical Skills</div>
              <div class="skill-tags">${skillsHtml}</div>
            </div>
            <div class="section">
              <div class="section-title">Languages</div>
              <ul class="languages">${languagesHtml}</ul>
            </div>
            <div class="section">
              <div class="section-title">Education</div>
              ${educationHtml}
            </div>
          </aside>
          <main class="main">
            <div class="section">
              <div class="section-title">Professional Experience</div>
              <div class="timeline">${experienceHtml}</div>
            </div>
            <div class="section">
              <div class="section-title">Key Projects</div>
              ${projectsHtml}
            </div>
          </main>
        </div>
        <div class="footer">© 2026 ${profile?.name}</div>
      </div>
    `;

    const iframe = document.createElement("iframe");
    iframe.style.position = "fixed";
    iframe.style.left = "-9999px";
    iframe.style.top = "0";
    iframe.style.width = "1200px";
    iframe.style.height = "1600px";
    iframe.style.opacity = "0";
    iframe.style.pointerEvents = "none";
    iframe.srcdoc = `<!DOCTYPE html><html><head><meta charset="UTF-8"></head><body>${resumeHtml}</body></html>`;
    document.body.appendChild(iframe);

    try {
      await new Promise((resolve) => {
        iframe.onload = resolve;
      });

      const iframeDoc = iframe.contentDocument || iframe.contentWindow.document;
      const iframeBody = iframeDoc.body;
      const canvas = await html2canvas(iframeBody, {
        scale: 2,
        useCORS: true,
        backgroundColor: "#f4f7fb",
      });

      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF({
        unit: "pt",
        format: "a4",
        orientation: "portrait",
      });
      const pageWidth = pdf.internal.pageSize.getWidth();
      const pageHeight = pdf.internal.pageSize.getHeight();
      const imgWidth = pageWidth;
      const imgHeight = (canvas.height * imgWidth) / canvas.width;
      let heightLeft = imgHeight;
      let position = 0;

      pdf.addImage(imgData, "PNG", 0, position, imgWidth, imgHeight);
      heightLeft -= pageHeight;

      while (heightLeft > 0) {
        position = heightLeft - imgHeight;
        pdf.addPage();
        pdf.addImage(imgData, "PNG", 0, position, imgWidth, imgHeight);
        heightLeft -= pageHeight;
      }

      pdf.save(`${profile?.name?.replace(/\s+/g, "_") || "resume"}.pdf`);
    } finally {
      document.body.removeChild(iframe);
    }
  };

  return (
    <div className="resume-container">
      <UIBorderArticle>
        <header
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <h2 className="h2 article-title">Resume</h2>
          {profile && (
            <button
              onClick={handleGeneratePDF}
              className="btn btn-sm btn-primary download-resume"
              style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}
            >
              <i className="bx bx-download"></i>
              Download Resume
            </button>
          )}
        </header>

        <TimelineList
          icon="bx bx-briefcase"
          title="Experience"
          items={profile?.experiences}
        />

        <TimelineList
          icon="bx bx-book-open"
          title="Education"
          items={profile?.educations}
        />

        <ProgressList title="Languages" items={profile?.languages} />
        <ProgressList title="My Skills" items={profile?.techSkills} />
      </UIBorderArticle>
    </div>
  );
};

export default Resume;
