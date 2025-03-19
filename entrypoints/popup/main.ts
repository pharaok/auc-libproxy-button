import "./style.css";
import { createIcons, Mail } from "lucide";
import { siGithub, siOpenaccess } from "simple-icons";
import { toLibProxyUrl } from "@/utils/toLibProxyUrl";

createIcons({ icons: { Mail } });

const SI_ICONS = {
  openaccess: siOpenaccess,
  github: siGithub,
};

let currentUrl = "";
await browser.tabs.query({ active: true, currentWindow: true }).then((tabs) => {
  currentUrl = tabs[0].url!;
});

document.querySelectorAll("i[data-si]").forEach((icon) => {
  const htmlIcon = icon as HTMLElement;
  const iconData = SI_ICONS[htmlIcon.dataset.si as keyof typeof SI_ICONS];
  htmlIcon.innerHTML = `
    <svg fill="currentColor" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path d="${iconData.path}" />
    </svg>
  `;
  iconData.svg;
});

const redirectButton = document.getElementById(
  "libproxy-redirect",
) as HTMLAnchorElement;
redirectButton.href = toLibProxyUrl(currentUrl);
