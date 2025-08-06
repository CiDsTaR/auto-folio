// db/seed.ts
import { db, Category, Workflow, WorkflowFeature, WorkflowIntegration, WorkflowUseCase, WorkflowROIMetric, WorkflowTestimonial, WorkflowInclude } from 'astro:db';

export default async function seed() {
  // Insertar categorías
  await db.insert(Category).values([
    { id: 1, name: 'Marketing', slug: 'marketing', color: '#ff6b6b', description: 'Automatización de marketing digital' },
    { id: 2, name: 'E-commerce', slug: 'ecommerce', color: '#4ecdc4', description: 'Gestión de tiendas online' },
    { id: 3, name: 'Productividad', slug: 'productivity', color: '#45b7d1', description: 'Optimización de procesos' },
    { id: 4, name: 'Social Media', slug: 'social', color: '#96ceb4', description: 'Gestión de redes sociales' },
    { id: 5, name: 'CRM', slug: 'crm', color: '#ffd93d', description: 'Gestión de relaciones con clientes' },
  ]);

  // Insertar workflows
  await db.insert(Workflow).values([
    {
      id: 1,
      title: 'Email Marketing Automatizado',
      slug: 'email-marketing-automatizado',
      description: 'Sistema completo de email marketing que segmenta contactos, envía campañas personalizadas y analiza resultados automáticamente.',
      longDescription: 'Workflow avanzado que integra múltiples plataformas de email marketing para crear campañas altamente personalizadas. Incluye segmentación inteligente basada en comportamiento, A/B testing automático, y análisis predictivo de engagement.',
      icon: '📧',
      categoryId: 1,
      nodeCount: 15,
      complexity: 'Intermedia',
      rating: 4.8,
      deliveryTime: '24h',
      priceMin: 497,
      priceMax: 897,
      setupTime: '4-6 horas',
      maintenance: 'Bajo',
      scalability: 'Alta',
      aiIntegrated: false,
      supportDays: 30,
      consultationHours: 1.0,
      featured: true,
      metaTitle: 'Email Marketing Automatizado - Workflow N8N Profesional',
      metaDescription: 'Automatiza tu email marketing con nuestro workflow profesional. Segmentación IA, A/B testing y análisis avanzado. Implementación en 24h.',
    },
    {
      id: 2,
      title: 'Automatización E-commerce',
      slug: 'automatizacion-ecommerce',
      description: 'Gestión completa de pedidos, inventario y customer service para tiendas online. Sincroniza múltiples plataformas automáticamente.',
      longDescription: 'Solución integral para e-commerce que automatiza todo el ciclo de vida del pedido. Desde la captura inicial hasta el follow-up post-venta, incluyendo gestión de inventario multi-plataforma y customer service automatizado.',
      icon: '🛒',
      categoryId: 2,
      nodeCount: 22,
      complexity: 'Avanzada',
      rating: 4.9,
      deliveryTime: '48h',
      priceMin: 697,
      priceMax: 1297,
      setupTime: '6-8 horas',
      maintenance: 'Medio',
      scalability: 'Muy Alta',
      aiIntegrated: false,
      supportDays: 60,
      consultationHours: 2.0,
      featured: true,
      metaTitle: 'Automatización E-commerce - Workflow Completo N8N',
      metaDescription: 'Automatiza tu tienda online completamente. Gestión de pedidos, inventario y customer service. Multi-plataforma. Setup en 48h.',
    },
    {
      id: 3,
      title: 'Social Media Manager',
      slug: 'social-media-manager',
      description: 'Programa, publica y analiza contenido en múltiples redes sociales. Incluye generación de contenido con IA y análisis de engagement.',
      longDescription: 'Manager completo de redes sociales con IA integrada para generación de contenido. Programa posts automáticamente, responde a comentarios y analiza el rendimiento para optimizar el engagement.',
      icon: '📱',
      categoryId: 4,
      nodeCount: 18,
      complexity: 'Intermedia-Alta',
      rating: 4.7,
      deliveryTime: '36h',
      priceMin: 597,
      priceMax: 997,
      setupTime: '5-7 horas',
      maintenance: 'Medio',
      scalability: 'Alta',
      aiIntegrated: true,
      supportDays: 45,
      consultationHours: 1.5,
      featured: false,
      metaTitle: 'Social Media Manager Automatizado - IA + N8N',
      metaDescription: 'Gestiona tus redes sociales con IA. Programación automática, generación de contenido y analytics. Múltiples plataformas.',
    },
    {
      id: 4,
      title: 'CRM Automatizado',
      slug: 'crm-automatizado',
      description: 'Gestión completa de leads, seguimiento de clientes y automatización de procesos de ventas. Sincroniza datos entre múltiples fuentes.',
      longDescription: 'CRM inteligente que automatiza todo el pipeline de ventas. Lead scoring automático, nurturing personalizado y predicción de cierre con machine learning.',
      icon: '👥',
      categoryId: 5,
      nodeCount: 25,
      complexity: 'Avanzada',
      rating: 4.8,
      deliveryTime: '72h',
      priceMin: 797,
      priceMax: 1497,
      setupTime: '8-12 horas',
      maintenance: 'Medio',
      scalability: 'Muy Alta',
      aiIntegrated: true,
      supportDays: 90,
      consultationHours: 3.0,
      featured: true,
      metaTitle: 'CRM Automatizado con IA - Pipeline de Ventas N8N',
      metaDescription: 'Automatiza tu CRM completamente. Lead scoring IA, nurturing automático y predicción de ventas. Integración total.',
    },
    {
      id: 5,
      title: 'Reportes Automatizados',
      slug: 'reportes-automatizados',
      description: 'Genera reportes automáticos combinando datos de múltiples fuentes. Dashboards en tiempo real y alertas personalizadas.',
      longDescription: 'Sistema de business intelligence que consolida datos de múltiples fuentes y genera reportes automáticos. Dashboards en tiempo real y alertas inteligentes.',
      icon: '📊',
      categoryId: 3,
      nodeCount: 12,
      complexity: 'Intermedia',
      rating: 4.6,
      deliveryTime: '24h',
      priceMin: 397,
      priceMax: 697,
      setupTime: '3-5 horas',
      maintenance: 'Bajo',
      scalability: 'Alta',
      aiIntegrated: false,
      supportDays: 30,
      consultationHours: 1.0,
      featured: false,
      metaTitle: 'Reportes Automatizados - Business Intelligence N8N',
      metaDescription: 'Automatiza tus reportes con N8N. Dashboards en tiempo real, múltiples fuentes de datos y alertas inteligentes.',
    },
    {
      id: 6,
      title: 'Lead Generation Pro',
      slug: 'lead-generation-pro',
      description: 'Captura, califica y nutre leads automáticamente. Incluye landing pages, formularios inteligentes y seguimiento personalizado.',
      longDescription: 'Sistema completo de lead generation con IA para scoring y nurturing. Attribution modeling completo y optimization automática de campañas.',
      icon: '🎯',
      categoryId: 1,
      nodeCount: 20,
      complexity: 'Avanzada',
      rating: 4.9,
      deliveryTime: '48h',
      priceMin: 697,
      priceMax: 1197,
      setupTime: '6-8 horas',
      maintenance: 'Medio',
      scalability: 'Muy Alta',
      aiIntegrated: true,
      supportDays: 60,
      consultationHours: 2.0,
      featured: true,
      metaTitle: 'Lead Generation Pro - Captura y Conversión Automatizada',
      metaDescription: 'Sistema completo de lead generation con IA. Captura, scoring y nurturing automático. Attribution modeling avanzado.',
    },
  ]);

  // Insertar características para cada workflow
  const features = [
    // Email Marketing (id: 1)
    { workflowId: 1, feature: 'Segmentación automática', order: 1 },
    { workflowId: 1, feature: 'A/B Testing', order: 2 },
    { workflowId: 1, feature: 'Análisis de rendimiento', order: 3 },
    { workflowId: 1, feature: 'Plantillas personalizables', order: 4 },
    
    // E-commerce (id: 2)
    { workflowId: 2, feature: 'Sync inventario', order: 1 },
    { workflowId: 2, feature: 'Gestión pedidos', order: 2 },
    { workflowId: 2, feature: 'Notificaciones automáticas', order: 3 },
    { workflowId: 2, feature: 'Reportes de ventas', order: 4 },
    
    // Social Media (id: 3)
    { workflowId: 3, feature: 'Programación automática', order: 1 },
    { workflowId: 3, feature: 'Generación de contenido IA', order: 2 },
    { workflowId: 3, feature: 'Analytics avanzados', order: 3 },
    { workflowId: 3, feature: 'Respuestas automáticas', order: 4 },
    
    // CRM (id: 4)
    { workflowId: 4, feature: 'Lead scoring', order: 1 },
    { workflowId: 4, feature: 'Seguimiento automático', order: 2 },
    { workflowId: 4, feature: 'Pipeline management', order: 3 },
    { workflowId: 4, feature: 'Reportes de ventas', order: 4 },
    
    // Reportes (id: 5)
    { workflowId: 5, feature: 'Dashboards en tiempo real', order: 1 },
    { workflowId: 5, feature: 'Alertas personalizadas', order: 2 },
    { workflowId: 5, feature: 'Múltiples fuentes de datos', order: 3 },
    { workflowId: 5, feature: 'Exportación automática', order: 4 },
    
    // Lead Generation (id: 6)
    { workflowId: 6, feature: 'Captura multicanal', order: 1 },
    { workflowId: 6, feature: 'Lead scoring avanzado', order: 2 },
    { workflowId: 6, feature: 'Nurturing automático', order: 3 },
    { workflowId: 6, feature: 'Conversión optimizada', order: 4 },
  ];
  await db.insert(WorkflowFeature).values(features);

  // Insertar integraciones
  const integrations = [
    // Email Marketing
    { workflowId: 1, name: 'Mailchimp', category: 'Email', order: 1 },
    { workflowId: 1, name: 'Google Sheets', category: 'Data', order: 2 },
    { workflowId: 1, name: 'HubSpot', category: 'CRM', order: 3 },
    { workflowId: 1, name: 'Slack', category: 'Communication', order: 4 },
    
    // E-commerce
    { workflowId: 2, name: 'Shopify', category: 'E-commerce', order: 1 },
    { workflowId: 2, name: 'WooCommerce', category: 'E-commerce', order: 2 },
    { workflowId: 2, name: 'Stripe', category: 'Payment', order: 3 },
    { workflowId: 2, name: 'WhatsApp', category: 'Communication', order: 4 },
    
    // Social Media
    { workflowId: 3, name: 'Facebook', category: 'Social', order: 1 },
    { workflowId: 3, name: 'Instagram', category: 'Social', order: 2 },
    { workflowId: 3, name: 'Twitter', category: 'Social', order: 3 },
    { workflowId: 3, name: 'LinkedIn', category: 'Social', order: 4 },
    { workflowId: 3, name: 'OpenAI', category: 'AI', order: 5 },
    
    // CRM
    { workflowId: 4, name: 'Salesforce', category: 'CRM', order: 1 },
    { workflowId: 4, name: 'HubSpot', category: 'CRM', order: 2 },
    { workflowId: 4, name: 'Pipedrive', category: 'CRM', order: 3 },
    { workflowId: 4, name: 'Gmail', category: 'Email', order: 4 },
    
    // Reportes
    { workflowId: 5, name: 'Google Analytics', category: 'Analytics', order: 1 },
    { workflowId: 5, name: 'Google Sheets', category: 'Data', order: 2 },
    { workflowId: 5, name: 'Tableau', category: 'BI', order: 3 },
    { workflowId: 5, name: 'Slack', category: 'Communication', order: 4 },
    
    // Lead Generation
    { workflowId: 6, name: 'Facebook Ads', category: 'Advertising', order: 1 },
    { workflowId: 6, name: 'Google Ads', category: 'Advertising', order: 2 },
    { workflowId: 6, name: 'Zapier', category: 'Automation', order: 3 },
    { workflowId: 6, name: 'ActiveCampaign', category: 'Email', order: 4 },
  ];
  await db.insert(WorkflowIntegration).values(integrations);

  // Insertar casos de uso
  const useCases = [
    // Email Marketing
    { workflowId: 1, title: 'E-commerce', description: 'Carritos abandonados, recomendaciones de productos, ofertas personalizadas basadas en historial de compras', industry: 'E-commerce', companySize: 'SMB', order: 1 },
    { workflowId: 1, title: 'SaaS', description: 'Onboarding de usuarios, feature adoption, retención y upselling automático', industry: 'Technology', companySize: 'Scale-up', order: 2 },
    { workflowId: 1, title: 'Servicios B2B', description: 'Lead nurturing, seguimiento post-venta, newsletters de industria', industry: 'Professional Services', companySize: 'Enterprise', order: 3 },
    
    // E-commerce
    { workflowId: 2, title: 'Multi-tienda', description: 'Sincroniza inventario entre Shopify, Amazon, eBay y WooCommerce automáticamente', industry: 'E-commerce', companySize: 'Enterprise', order: 1 },
    { workflowId: 2, title: 'Fulfillment', description: 'Automatiza todo el proceso desde pedido hasta envío con tracking automático', industry: 'E-commerce', companySize: 'SMB', order: 2 },
    { workflowId: 2, title: 'Customer Service', description: 'Respuestas automáticas, escalación inteligente y seguimiento post-venta', industry: 'E-commerce', companySize: 'Scale-up', order: 3 },
    
    // Social Media
    { workflowId: 3, title: 'Agencias', description: 'Gestiona múltiples clientes desde un solo dashboard con reportes automáticos', industry: 'Marketing Agency', companySize: 'SMB', order: 1 },
    { workflowId: 3, title: 'Personal Brands', description: 'Crecimiento orgánico con contenido personalizado y engagement automático', industry: 'Personal Brand', companySize: 'Individual', order: 2 },
    { workflowId: 3, title: 'E-commerce', description: 'Promociones automáticas, user-generated content y social commerce', industry: 'E-commerce', companySize: 'SMB', order: 3 },
    
    // CRM
    { workflowId: 4, title: 'B2B Sales', description: 'Lead qualification, nurturing automático y closing predictivo para equipos de ventas', industry: 'B2B', companySize: 'Enterprise', order: 1 },
    { workflowId: 4, title: 'Real Estate', description: 'Seguimiento de prospects, programación de visitas y análisis de preferencias', industry: 'Real Estate', companySize: 'SMB', order: 2 },
    { workflowId: 4, title: 'Consultorías', description: 'Gestión de propuestas, seguimiento de proyectos y facturación automática', industry: 'Professional Services', companySize: 'Scale-up', order: 3 },
    
    // Reportes
    { workflowId: 5, title: 'Executive Dashboards', description: 'KPIs consolidados, alertas automáticas y reportes ejecutivos semanales', industry: 'All', companySize: 'Enterprise', order: 1 },
    { workflowId: 5, title: 'Marketing ROI', description: 'Tracking de campañas, attribution modeling y optimization automática', industry: 'Marketing', companySize: 'Scale-up', order: 2 },
    { workflowId: 5, title: 'Financial Reporting', description: 'Cash flow, P&L automático y forecasting predictivo', industry: 'Finance', companySize: 'Enterprise', order: 3 },
    
    // Lead Generation
    { workflowId: 6, title: 'SaaS Companies', description: 'Free trial optimization, demo booking automático y feature adoption tracking', industry: 'SaaS', companySize: 'Scale-up', order: 1 },
    { workflowId: 6, title: 'Service Providers', description: 'Consultation booking, proposal automation y client onboarding', industry: 'Professional Services', companySize: 'SMB', order: 2 },
    { workflowId: 6, title: 'E-learning', description: 'Course registration, progressive profiling y upselling automático', industry: 'Education', companySize: 'SMB', order: 3 },
  ];
  await db.insert(WorkflowUseCase).values(useCases);

  // Insertar métricas ROI
  const roiMetrics = [
    // Email Marketing
    { workflowId: 1, metricName: 'open_rate_increase', metricValue: '35%', metricLabel: 'Aumento en Open Rate', metricType: 'percentage', order: 1 },
    { workflowId: 1, metricName: 'ctr_improvement', metricValue: '48%', metricLabel: 'Mejora en CTR', metricType: 'percentage', order: 2 },
    { workflowId: 1, metricName: 'time_saved', metricValue: '15h', metricLabel: 'Ahorradas por semana', metricType: 'time', order: 3 },
    { workflowId: 1, metricName: 'additional_revenue', metricValue: '€2.8k', metricLabel: 'Revenue adicional/mes', metricType: 'currency', order: 4 },
    
    // E-commerce
    { workflowId: 2, metricName: 'error_reduction', metricValue: '90%', metricLabel: 'Reducción errores inventario', metricType: 'percentage', order: 1 },
    { workflowId: 2, metricName: 'time_saved', metricValue: '25h', metricLabel: 'Ahorradas por semana', metricType: 'time', order: 2 },
    { workflowId: 2, metricName: 'cost_savings', metricValue: '€5.2k', metricLabel: 'Ahorro mensual en personal', metricType: 'currency', order: 3 },
    { workflowId: 2, metricName: 'accuracy', metricValue: '99.2%', metricLabel: 'Precisión en stock', metricType: 'percentage', order: 4 },
    
    // Social Media
    { workflowId: 3, metricName: 'engagement_growth', metricValue: '180%', metricLabel: 'Crecimiento engagement', metricType: 'percentage', order: 1 },
    { workflowId: 3, metricName: 'time_saved', metricValue: '20h', metricLabel: 'Ahorradas por semana', metricType: 'time', order: 2 },
    { workflowId: 3, metricName: 'lead_increase', metricValue: '65%', metricLabel: 'Más leads from social', metricType: 'percentage', order: 3 },
    { workflowId: 3, metricName: 'follower_growth', metricValue: '+2.5k', metricLabel: 'Seguidores promedio/mes', metricType: 'count', order: 4 },
    
    // CRM
    { workflowId: 4, metricName: 'conversion_increase', metricValue: '45%', metricLabel: 'Aumento conversion rate', metricType: 'percentage', order: 1 },
    { workflowId: 4, metricName: 'time_saved', metricValue: '30h', metricLabel: 'Ahorradas por semana', metricType: 'time', order: 2 },
    { workflowId: 4, metricName: 'additional_revenue', metricValue: '€12k', metricLabel: 'Revenue adicional/mes', metricType: 'currency', order: 3 },
    { workflowId: 4, metricName: 'scoring_accuracy', metricValue: '85%', metricLabel: 'Precisión lead scoring', metricType: 'percentage', order: 4 },
    
    // Reportes
    { workflowId: 5, metricName: 'time_reduction', metricValue: '75%', metricLabel: 'Reducción tiempo reportes', metricType: 'percentage', order: 1 },
    { workflowId: 5, metricName: 'time_saved', metricValue: '15h', metricLabel: 'Ahorradas por semana', metricType: 'time', order: 2 },
    { workflowId: 5, metricName: 'cost_savings', metricValue: '€3.5k', metricLabel: 'Ahorro en analyst time', metricType: 'currency', order: 3 },
    { workflowId: 5, metricName: 'decision_speed', metricValue: '48h', metricLabel: 'Faster decision making', metricType: 'time', order: 4 },
    
    // Lead Generation
    { workflowId: 6, metricName: 'qualified_leads', metricValue: '320%', metricLabel: 'Aumento qualified leads', metricType: 'percentage', order: 1 },
    { workflowId: 6, metricName: 'time_saved', metricValue: '18h', metricLabel: 'Ahorradas por semana', metricType: 'time', order: 2 },
    { workflowId: 6, metricName: 'additional_revenue', metricValue: '€8.7k', metricLabel: 'Revenue adicional/mes', metricType: 'currency', order: 3 },
    { workflowId: 6, metricName: 'conversion_rate', metricValue: '65%', metricLabel: 'Mejor lead-to-sale rate', metricType: 'percentage', order: 4 },
  ];
  await db.insert(WorkflowROIMetric).values(roiMetrics);

  // Insertar testimonios
  const testimonials = [
    { workflowId: 1, testimonialText: 'Implementamos este workflow hace 3 meses y nuestras conversiones por email han aumentado un 65%. La segmentación automática es increíble.', authorName: 'María González', authorRole: 'Marketing Director', authorCompany: 'TechStartup', rating: 5, featured: true, verified: true },
    { workflowId: 2, testimonialText: 'Nuestro tiempo de procesamiento de pedidos se redujo de 4 horas a 15 minutos. El ROI se pagó solo en el primer mes.', authorName: 'Carlos Rodríguez', authorRole: 'CEO', authorCompany: 'MiTiendaOnline', rating: 5, featured: true, verified: true },
    { workflowId: 3, testimonialText: 'En 6 meses pasamos de 500 a 8,000 seguidores. El contenido generado por IA es increíblemente natural y efectivo.', authorName: 'Ana Martín', authorRole: 'Founder', authorCompany: 'FitnessBrand', rating: 5, featured: true, verified: true },
    { workflowId: 4, testimonialText: 'Nuestro equipo de ventas aumentó un 40% su productividad. El lead scoring es tan preciso que prácticamente no perdemos tiempo en leads fríos.', authorName: 'Roberto Silva', authorRole: 'Sales Director', authorCompany: 'TechSolutions', rating: 5, featured: true, verified: true },
    { workflowId: 5, testimonialText: 'Ya no pasamos horas compilando datos. Los reportes llegan automáticamente cada lunes y nos permiten tomar decisiones inmediatas.', authorName: 'Laura Fernández', authorRole: 'COO', authorCompany: 'GrowthCorp', rating: 5, featured: true, verified: true },
    { workflowId: 6, testimonialText: 'Pasamos de 50 leads mensuales a 380 en solo 4 meses. La calidad de los leads también mejoró dramáticamente.', authorName: 'Miguel Torres', authorRole: 'Marketing Head', authorCompany: 'ConsultoraPro', rating: 5, featured: true, verified: true },
  ];
  await db.insert(WorkflowTestimonial).values(testimonials);

  // Insertar elementos incluidos
  const includes = [
    // Email Marketing
    { workflowId: 1, item: 'Workflow completo configurado', category: 'setup', order: 1 },
    { workflowId: 1, item: '3 plantillas de email', category: 'templates', order: 2 },
    { workflowId: 1, item: 'Dashboard de métricas', category: 'analytics', order: 3 },
    { workflowId: 1, item: 'Documentación completa', category: 'documentation', order: 4 },
    { workflowId: 1, item: '1 hora de consultoría', category: 'support', order: 5 },
    { workflowId: 1, item: 'Soporte 30 días', category: 'support', order: 6 },
    
    // E-commerce
    { workflowId: 2, item: 'Workflow multi-plataforma', category: 'setup', order: 1 },
    { workflowId: 2, item: 'Dashboard de control', category: 'analytics', order: 2 },
    { workflowId: 2, item: 'Alertas personalizadas', category: 'features', order: 3 },
    { workflowId: 2, item: 'Reportes automatizados', category: 'analytics', order: 4 },
    { workflowId: 2, item: '2 horas de consultoría', category: 'support', order: 5 },
    { workflowId: 2, item: 'Soporte 60 días', category: 'support', order: 6 },
    
    // Social Media
    { workflowId: 3, item: 'Workflow multi-plataforma', category: 'setup', order: 1 },
    { workflowId: 3, item: 'Templates de contenido IA', category: 'templates', order: 2 },
    { workflowId: 3, item: 'Analytics dashboard', category: 'analytics', order: 3 },
    { workflowId: 3, item: 'Biblioteca de hashtags', category: 'features', order: 4 },
    { workflowId: 3, item: '1.5 horas consultoría', category: 'support', order: 5 },
    { workflowId: 3, item: 'Soporte 45 días', category: 'support', order: 6 },
    
    // CRM
    { workflowId: 4, item: 'CRM workflow completo', category: 'setup', order: 1 },
    { workflowId: 4, item: 'Lead scoring IA', category: 'features', order: 2 },
    { workflowId: 4, item: 'Email sequences', category: 'templates', order: 3 },
    { workflowId: 4, item: 'Sales dashboard', category: 'analytics', order: 4 },
    { workflowId: 4, item: '3 horas consultoría', category: 'support', order: 5 },
    { workflowId: 4, item: 'Soporte 90 días', category: 'support', order: 6 },
    
    // Reportes
    { workflowId: 5, item: 'Workflow de reportes', category: 'setup', order: 1 },
    { workflowId: 5, item: '5 dashboard templates', category: 'templates', order: 2 },
    { workflowId: 5, item: 'Sistema de alertas', category: 'features', order: 3 },
    { workflowId: 5, item: 'Export automático', category: 'features', order: 4 },
    { workflowId: 5, item: '1 hora consultoría', category: 'support', order: 5 },
    { workflowId: 5, item: 'Soporte 30 días', category: 'support', order: 6 },
    
    // Lead Generation
    { workflowId: 6, item: 'Lead generation workflow', category: 'setup', order: 1 },
    { workflowId: 6, item: '3 landing page templates', category: 'templates', order: 2 },
    { workflowId: 6, item: 'Email sequences (5 flows)', category: 'templates', order: 3 },
    { workflowId: 6, item: 'Attribution dashboard', category: 'analytics', order: 4 },
    { workflowId: 6, item: '2 horas consultoría', category: 'support', order: 5 },
    { workflowId: 6, item: 'Soporte 60 días', category: 'support', order: 6 },
  ];
  await db.insert(WorkflowInclude).values(includes);

  console.log('✅ Database seeded successfully!');
}