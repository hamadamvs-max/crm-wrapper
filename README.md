# 📊 CRM Pro - PWA Wrapper

## نظام إدارة العملاء - تطبيق ويب سريع وخفيف

---

## 🚀 خطوات النشر على Vercel

### الخطوة 1: تثبيت Vercel CLI
```bash
npm install -g vercel
```

### الخطوة 2: نشر المشروع
```bash
cd crm-wrapper
vercel --prod
```

أو انشر مباشرة:
1. ارفع الملفات على GitHub
2. اربط GitHub بـ Vercel
3. Vercel ينشر تلقائياً

---

## 📱 كيف يستخدم العميل؟

1. **يفتح اللينك** على الموبايل
2. **يظهرله زر** "ثبت التطبيق على شاشتك"
3. **يضغط "Add to Home Screen"**
4. **يبقى عنده تطبيق CRM** زي أي تطبيق! 🎉

---

## 🎨 المميزات

| الميزة | الوصف |
|--------|-------|
| ⚡ سريع | تحميل فوري + cache |
| 🔒 آمن | SSL تلقائي من Vercel |
| 📴 Offline | يشتغل بدون نت (الصفحة الرئيسية) |
| 🔔 Push | إشعارات (مستقبلاً) |
| 📱 Responsive | يشتغل على أي شاشة |
| 🌙 RTL | دعم كامل للعربية |

---

## 🔧 تخصيص

### تغيير اللون
في `index.html` غير:
```css
background: linear-gradient(135deg, #1e3a8a 0%, #2563eb 50%, #3b82f6 100%);
```

### تغيير الاسم
في `manifest.json` غير:
```json
"name": "اسمك هنا",
"short_name": "الاسم المختصر"
```

### تغيير اللوجو
استبدل ملفات `icon-*.png` بأيقوناتك

---

## 📁 هيكل الملفات

```
crm-wrapper/
├── index.html          ← الصفحة الرئيسية
├── manifest.json       ← إعدادات PWA
├── sw.js              ← Service Worker
├── icon-72.png        ← أيقونات
├── icon-96.png
├── icon-128.png
├── icon-144.png
├── icon-152.png
├── icon-192.png
├── icon-384.png
└── icon-512.png
```

---

## ⚠️ ملاحظة مهمة

الـ iframe يحمل CRM بتاعك من Google Apps Script. 
لو Google حظرت الـ iframe، هنحتاج حل تاني (API Proxy).

---

## 💬 دعم

لو في مشكلة، قولي وأصلحلك! 🚀
