import './style.css'
import {html, render} from 'lit-html';

const session = await window.meet.addon.createAddonSession({
  cloudProjectNumber: import.meta.env.VITE_GOOGLE_PROJECT_NUMBER,
});
const client = await session.createMainStageClient();

client.unloadSidePanel();

document.addEventListener('DOMContentLoaded', async () => {
  const startingState = await client.getCollaborationStartingState();
  const item = JSON.parse(startingState.additionalData);

  const html = `
    <div>
      Viewing document: ${item.title}
    </div>
  `;
  document.querySelector('.content-container').innerHTML = html;
});
