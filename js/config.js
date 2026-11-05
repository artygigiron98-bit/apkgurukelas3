/**
 * Konfigurasi aplikasi.
 *
 * API_URL : URL Web App Google Apps Script (berakhiran /exec).
 *           Kosongkan untuk MODE DEMO (data disimpan di browser/localStorage).
 * TOKEN   : harus sama dengan konstanta TOKEN di backend/Code.gs (boleh kosong).
 *
 * Setelah deploy backend, isi API_URL di sini lalu commit ulang
 * atau edit langsung di repo GitHub (js/config.js).
 */
window.CONFIG = {
  API_URL: 'https://script.google.com/macros/s/AKfycbzv0CYYUZI9CpNdKKYlourUhi6Jo968pCOaNCrZRhTJmDkIAOFsVrpTETbuLZETh0AfWw/exec',
  TOKEN: '',
};
