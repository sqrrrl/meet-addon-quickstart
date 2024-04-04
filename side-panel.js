import './style.css'

const session = await window.meet.addon.createAddonSession({
  cloudProjectNumber: import.meta.env.VITE_GOOGLE_PROJECT_NUMBER,
});
const client = await session.createSidePanelClient();

document.querySelector('.content-items').addEventListener('click', async (event) => {
  const id = event.target.dataset.id;
  const title = event.target.dataset.title;
  
  if (!id) {
    return;
  }

  await client.setCollaborationStartingState({
    mainStageUrl: new URL("/main-stage", window.location.href).toString(),
    additionalData: JSON.stringify({
      id,
      title 
    })
  });
});