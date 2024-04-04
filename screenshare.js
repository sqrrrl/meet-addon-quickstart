import './style.css'

meet.addon.screensharing.exposeToMeetWhenScreensharing(
  {
    cloudProjectNumber: import.meta.env.VITE_GOOGLE_PROJECT_NUMBER,
    startActivityOnOpen: true,
    mainStageUrl: new URL("/main-stage", window.location.href).toString(),
    additionalData: JSON.stringify({
      id: 1,
      title: 'Document 1',
    })
  }
);