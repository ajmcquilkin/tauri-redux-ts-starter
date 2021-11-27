mod file;

fn main() {
  tauri::Builder::default()
    .invoke_handler(tauri::generate_handler![file::fetch_file])
    .run(tauri::generate_context!())
    .expect("error while running tauri application");
}
