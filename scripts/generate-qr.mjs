import QRCode from "qrcode";
import sharp from "sharp";
import { writeFile } from "node:fs/promises";

const NAVY = "#16233f";
const SIZE = 480;
const BADGE = 108; // ~22% of QR width, safe under H error-correction
const PAD = 128; // white backing behind the badge

const facebookPath =
  "M13.5 21v-8h2.7l.4-3.1h-3.1V7.9c0-.9.25-1.5 1.5-1.5h1.6V3.6c-.3 0-1.2-.1-2.3-.1-2.3 0-3.8 1.4-3.8 3.9v2.5H8v3.1h2.2V21h3.3z";
const telegramPath =
  "M21.5 4.5 2.8 11.9c-1.1.45-1.1 1.07-.2 1.34l4.8 1.5 1.8 5.6c.22.6.45.83.9.83.36 0 .53-.16.75-.38l1.9-1.85 4.1 3.03c.75.42 1.3.2 1.5-.7l2.7-13.05c.28-1.15-.3-1.6-1.05-1.19zM8.9 14.3l9.35-5.9c.45-.27.85-.13.52.17l-7.7 7.03-.3 3.24-1.87-4.54z";

const badgeSvg = ({ shape, brandColor, iconPath, iconScale = 1 }) => `
<svg width="${BADGE}" height="${BADGE}" viewBox="0 0 ${BADGE} ${BADGE}" xmlns="http://www.w3.org/2000/svg">
  ${
    shape === "circle"
      ? `<circle cx="${BADGE / 2}" cy="${BADGE / 2}" r="${BADGE / 2}" fill="${brandColor}"/>`
      : `<rect width="${BADGE}" height="${BADGE}" rx="${BADGE * 0.22}" fill="${brandColor}"/>`
  }
  <g transform="translate(${BADGE / 2}, ${BADGE / 2}) scale(${(iconScale * BADGE) / 30}) translate(-12,-12)">
    <path d="${iconPath}" fill="#ffffff"/>
  </g>
</svg>`;

async function buildQr({ text, brandColor, shape, iconPath, iconScale, outFile }) {
  const qrBuffer = await QRCode.toBuffer(text, {
    errorCorrectionLevel: "H",
    margin: 2,
    width: SIZE,
    color: { dark: NAVY, light: "#ffffff" },
  });

  const badge = await sharp(Buffer.from(badgeSvg({ shape, brandColor, iconPath, iconScale }))).png().toBuffer();

  const whitePad = await sharp({
    create: { width: PAD, height: PAD, channels: 4, background: { r: 255, g: 255, b: 255, alpha: 1 } },
  })
    .png()
    .toBuffer();

  const final = await sharp(qrBuffer)
    .composite([
      { input: whitePad, gravity: "center" },
      { input: badge, gravity: "center" },
    ])
    .png()
    .toBuffer();

  await writeFile(outFile, final);
  console.log("wrote", outFile);
}

await buildQr({
  text: "https://www.facebook.com/people/Project-IVY/61565295581796/",
  brandColor: "#1877F2",
  shape: "square",
  iconPath: facebookPath,
  iconScale: 0.85,
  outFile: "public/images/facebook-qr.png",
});

await buildQr({
  text: "https://t.me/SomphorsT",
  brandColor: "#229ED9",
  shape: "circle",
  iconPath: telegramPath,
  iconScale: 0.78,
  outFile: "public/images/telegram-qr.png",
});
