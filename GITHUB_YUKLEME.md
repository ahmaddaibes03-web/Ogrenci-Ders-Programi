# GitHub'a yükleme

1. GitHub'da `New repository` seçin. Ad: `03-Ogrenci-Ders-Programi`. `README` eklemeyin.
2. VS Code terminalinden bu klasöre gidin.
3. Aşağıdaki komutları çalıştırın (GitHub kullanıcı adı: ahmaddaibes03-web):

```bash
git init
git add .
git commit -m "Mobil Programlama uygulamasi"
git branch -M main
git remote add origin https://github.com/ahmaddaibes03-web/03-Ogrenci-Ders-Programi.git
git push -u origin main
```

Önce `npm install` ve `npx expo start` ile test edin. `node_modules` GitHub'a yüklenmez.
