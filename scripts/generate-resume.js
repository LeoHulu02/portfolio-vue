// Generates a modern resume DOCX using the `docx` library
// Output: resume.docx in the project root

import fs from 'fs'
import path from 'path'
import {
  Document,
  Packer,
  Paragraph,
  TextRun,
  HeadingLevel,
  AlignmentType,
  UnderlineType,
} from 'docx'

const makeHeading = (text, level = HeadingLevel.HEADING_2) =>
  new Paragraph({
    text,
    heading: level,
    spacing: { after: 150 },
  })

const makeBullet = (text) =>
  new Paragraph({
    text,
    bullet: { level: 0 },
    spacing: { after: 50 },
  })

const makeRun = (text, opts = {}) => new TextRun({ text, ...opts })

const doc = new Document({
  sections: [
    {
      properties: {},
      children: [
        // Header: Name + Title
        new Paragraph({
          alignment: AlignmentType.CENTER,
          spacing: { after: 120 },
          children: [
            makeRun('Leo Saputra Hulu', { size: 48, bold: true }),
          ],
        }),
        new Paragraph({
          alignment: AlignmentType.CENTER,
          spacing: { after: 200 },
          children: [
            makeRun('Frontend Developer · 7th‑semester Computer Science Student', {
              size: 24,
            }),
          ],
        }),

        // Contact
        new Paragraph({
          alignment: AlignmentType.CENTER,
          spacing: { after: 200 },
          children: [
            makeRun('Email: leohulu02@gmail.com  ·  '),
            makeRun('GitHub: github.com/LeoHulu02  ·  '),
            makeRun('LinkedIn: linkedin.com/in/leo-saputra-hulu'),
          ],
        }),

        // Summary
        makeHeading('Summary', HeadingLevel.HEADING_2),
        new Paragraph({
          spacing: { after: 200 },
          children: [
            makeRun(
              'Passionate frontend developer who loves crafting fast, accessible, and beautiful web experiences. Comfortable turning ideas into polished UI with Vue.js and Tailwind, and building solid backends with Express.js and Prisma.'
            ),
          ],
        }),

        // Skills
        makeHeading('Skills', HeadingLevel.HEADING_2),
        makeBullet('Languages: JavaScript, HTML, CSS'),
        makeBullet('Frontend: Vue.js, Quasar, Tailwind CSS, Bootstrap'),
        makeBullet('Backend: Node.js, Express.js'),
        makeBullet('Database: PostgreSQL, Prisma, MySQL'),
        makeBullet('Tools: Git, GitHub, VS Code, Vite, Figma'),

        // Projects
        makeHeading('Selected Projects', HeadingLevel.HEADING_2),
        new Paragraph({
          children: [
            makeRun('MobileEasse — ', { bold: true }),
            makeRun(
              'Online workshop management system covering transactions, inventory, and customers.'
            ),
          ],
        }),
        makeBullet('Tech: HTML, JavaScript, MySQL, Bootstrap'),
        new Paragraph({ spacing: { after: 150 } }),

        new Paragraph({
          children: [
            makeRun('Alumni 2020 Portal — ', { bold: true }),
            makeRun('Responsive portal showcasing alumni profiles and class information.'),
          ],
        }),
        makeBullet('Tech: HTML, CSS, JavaScript'),
        new Paragraph({ spacing: { after: 150 } }),

        new Paragraph({
          children: [
            makeRun('File Upload App — ', { bold: true }),
            makeRun(
              'File upload application using Express.js with Firebase Storage and a modern frontend.'
            ),
          ],
        }),
        makeBullet('Tech: Vue.js, Node.js, Express, Firebase'),
        new Paragraph({ spacing: { after: 200 } }),

        // Education
        makeHeading('Education', HeadingLevel.HEADING_2),
        new Paragraph({
          children: [
            makeRun('B.Sc. in Computer Science (in progress) — ', { bold: true }),
            makeRun('Semester 7'),
          ],
        }),
        new Paragraph({
          children: [
            makeRun('University: ', { bold: true }),
            makeRun('Institut Sosial & Teknologi Widuri'),
          ],
        }),
        new Paragraph({ spacing: { after: 200 } }),

        // Extras
        makeHeading('Achievements & Interests', HeadingLevel.HEADING_2),
        makeBullet('Built multiple portfolio projects focused on UX and performance'),
        makeBullet('Enjoys clean design, animations, and developer tooling'),
        makeBullet('Active learner: exploring modern frontend patterns and testing'),
      ],
    },
  ],
})

const outPath = path.resolve(process.cwd(), 'resume.docx')
Packer.toBuffer(doc)
  .then((buffer) => {
    fs.writeFileSync(outPath, buffer)
    console.log(`Resume generated: ${outPath}`)
  })
  .catch((err) => {
    console.error('Failed to generate resume:', err)
    process.exit(1)
  })