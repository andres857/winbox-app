const { app, BrowserWindow } = require('electron')
const path = require('path')


// Habilitar soporte para varios formatos de video
app.commandLine.appendSwitch('ignore-gpu-blacklist')
app.commandLine.appendSwitch('enable-accelerated-video-decode')

function createWindow() {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false, // Permite la integración con Node.js
      webSecurity: true, // Mantiene la seguridad web
       // Añadir estas opciones para mejorar el soporte de video
       webgl: true,
       additionalArguments: ['--autoplay-policy=no-user-gesture-required']
    }
  })

  // En desarrollo, carga desde localhost
  if (process.env.NODE_ENV !== 'production') {
    win.loadURL('http://localhost:5173')
  } else {
    // En producción, carga desde los archivos construidos
    win.loadFile(path.join(__dirname, 'dist/index.html'))
  }
}

app.whenReady().then(createWindow)