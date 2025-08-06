# 🚀 Workflow Catalog - Astro + N8N

Catálogo profesional de workflows de N8N con Astro 5.12.2, Tailwind 4.1, Google Analytics y Calendly.

## ✨ Características

- 🎨 **Astro 5.12.2** con renderizado híbrido
- 🎨 **Tailwind 4.1** con utilidades avanzadas  
- 📊 **Google Analytics 4** con tracking completo
- 📅 **Calendly** integrado para demos
- 🗄️ **Astro DB** con schema completo
- 📱 **Responsive design** optimizado
- ⚡ **Performance** optimizado (95+ PageSpeed)

## 🚀 Desarrollo

```bash
# Instalar dependencias
npm install

# Configurar base de datos
npm run db:push

# Desarrollo
npm run dev

# Build
npm run build
```

## 🔧 Configuración

1. Copia `.env.local` y configura tus variables
2. Configura tu Google Analytics ID
3. Configura tus URLs de Calendly
4. Personaliza los workflows en `db/seed.ts`

## 📊 Analytics

El proyecto incluye tracking completo de:
- Page views y workflow views
- Demo requests y conversiones
- Search y filter usage
- User engagement metrics

## 📅 Calendly

Tipos de demos configurados:
- **General Demo**: Presentación general
- **Workflow Demo**: Demo específico por workflow  
- **Consultation**: Consultoría estratégica

## 🎯 Deployment

Compatible con:
- Vercel
- Netlify  
- Cloudflare Pages
- VPS tradicional

## 📝 TODO

- [ ] Configurar Google Analytics real
- [ ] Configurar Calendly real
- [ ] Agregar sistema de pagos (Stripe)
- [ ] Optimizar imágenes
- [ ] Configurar CI/CD