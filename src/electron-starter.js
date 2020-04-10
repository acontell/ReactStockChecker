const { app, BrowserWindow } = require('electron');
const path = require('path');

function createWindow() {

	const win = new BrowserWindow({
		width: 900,
		height: 1000,
		webPreferences: {
			nodeIntegration: true
		}
	});

	win.loadURL(process.env.ELECTRON_START_URL || `file://${path.join(__dirname, '../build/index.html')}`);

	win.removeMenu();

	process.env.ELECTRON_START_URL && win.webContents.openDevTools();
}

app.whenReady().then(createWindow);

app.on('window-all-closed', () => {

	if(process.platform !== 'darwin') {
		app.quit();
	}
});

app.on('activate', () => {

	if(BrowserWindow.getAllWindows().length === 0) {
		createWindow();
	}
});
