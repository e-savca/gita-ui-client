import { app, BrowserWindow } from 'electron'
import path from 'path'

const isDev = process.env.NODE_ENV === 'development'

const createWindow = async () => {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      contextIsolation: true,
      nodeIntegration: false,
    },
  })

  if (isDev) {
    const { default: installExtension, REACT_DEVELOPER_TOOLS } = await import(
      'electron-devtools-installer'
    )
    const ext = await installExtension(REACT_DEVELOPER_TOOLS)
    console.log(`React DevTools installed: ${ext.name}`)
  }

  const url = process.env.VITE_DEV_SERVER_URL
  if (url) {
    await win.loadURL(url)
  } else {
    await win.loadFile(path.join(__dirname, '../renderer/index.html'))
  }

  if (isDev) win.webContents.reload()
}

app.whenReady().then(createWindow)

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit()
})
