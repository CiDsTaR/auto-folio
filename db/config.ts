// db/config.ts
import { defineDb, defineTable, column } from 'astro:db';

// Tabla de categorías
const Category = defineTable({
  columns: {
    id: column.number({ primaryKey: true }),
    name: column.text(),
    slug: column.text({ unique: true }),
    color: column.text({ default: '#667eea' }),
    description: column.text({ optional: true }),
    createdAt: column.date({ default: new Date() }),
  }
});

// Tabla principal de workflows
const Workflow = defineTable({
  columns: {
    id: column.number({ primaryKey: true }),
    title: column.text(),
    slug: column.text({ unique: true }),
    description: column.text(),
    longDescription: column.text({ optional: true }),
    icon: column.text({ default: '⚙️' }),
    categoryId: column.number({ references: () => Category.columns.id }),
    nodeCount: column.number({ default: 0 }),
    complexity: column.text({ default: 'Intermedia' }), // Básica, Intermedia, Avanzada
    rating: column.number({ default: 4.5 }),
    deliveryTime: column.text({ default: '24-48h' }),
    priceMin: column.number({ default: 297 }),
    priceMax: column.number({ default: 997 }),
    setupTime: column.text({ default: '2-4 horas' }),
    maintenance: column.text({ default: 'Bajo' }),
    scalability: column.text({ default: 'Alta' }),
    aiIntegrated: column.boolean({ default: false }),
    supportDays: column.number({ default: 30 }),
    consultationHours: column.number({ default: 1.0 }),
    featured: column.boolean({ default: false }),
    active: column.boolean({ default: true }),
    metaTitle: column.text({ optional: true }),
    metaDescription: column.text({ optional: true }),
    createdAt: column.date({ default: new Date() }),
    updatedAt: column.date({ default: new Date() }),
  }
});

// Características de cada workflow
const WorkflowFeature = defineTable({
  columns: {
    id: column.number({ primaryKey: true }),
    workflowId: column.number({ references: () => Workflow.columns.id }),
    feature: column.text(),
    order: column.number({ default: 0 }),
  }
});

// Integraciones de cada workflow
const WorkflowIntegration = defineTable({
  columns: {
    id: column.number({ primaryKey: true }),
    workflowId: column.number({ references: () => Workflow.columns.id }),
    name: column.text(),
    logoUrl: column.text({ optional: true }),
    category: column.text({ optional: true }), // CRM, Email, Payment, etc.
    order: column.number({ default: 0 }),
  }
});

// Casos de uso específicos
const WorkflowUseCase = defineTable({
  columns: {
    id: column.number({ primaryKey: true }),
    workflowId: column.number({ references: () => Workflow.columns.id }),
    title: column.text(),
    description: column.text(),
    industry: column.text({ optional: true }),
    companySize: column.text({ optional: true }),
    order: column.number({ default: 0 }),
  }
});

// Métricas de ROI
const WorkflowROIMetric = defineTable({
  columns: {
    id: column.number({ primaryKey: true }),
    workflowId: column.number({ references: () => Workflow.columns.id }),
    metricName: column.text(),
    metricValue: column.text(),
    metricLabel: column.text(),
    metricType: column.text({ default: 'percentage' }), // percentage, currency, time, count
    order: column.number({ default: 0 }),
  }
});

// Testimonios
const WorkflowTestimonial = defineTable({
  columns: {
    id: column.number({ primaryKey: true }),
    workflowId: column.number({ references: () => Workflow.columns.id }),
    testimonialText: column.text(),
    authorName: column.text(),
    authorRole: column.text(),
    authorCompany: column.text(),
    authorImage: column.text({ optional: true }),
    rating: column.number({ default: 5 }),
    featured: column.boolean({ default: false }),
    verified: column.boolean({ default: false }),
    createdAt: column.date({ default: new Date() }),
  }
});

// Elementos incluidos en cada workflow
const WorkflowInclude = defineTable({
  columns: {
    id: column.number({ primaryKey: true }),
    workflowId: column.number({ references: () => Workflow.columns.id }),
    item: column.text(),
    icon: column.text({ default: '✅' }),
    category: column.text({ optional: true }), // setup, support, documentation, etc.
    order: column.number({ default: 0 }),
  }
});

// FAQ por workflow
const WorkflowFAQ = defineTable({
  columns: {
    id: column.number({ primaryKey: true }),
    workflowId: column.number({ references: () => Workflow.columns.id }),
    question: column.text(),
    answer: column.text(),
    order: column.number({ default: 0 }),
  }
});

// Análisis y métricas de uso
const WorkflowAnalytics = defineTable({
  columns: {
    id: column.number({ primaryKey: true }),
    workflowId: column.number({ references: () => Workflow.columns.id }),
    event: column.text(), // view, demo_request, purchase, etc.
    sessionId: column.text({ optional: true }),
    userId: column.text({ optional: true }),
    metadata: column.text({ optional: true }), // JSON string
    timestamp: column.date({ default: new Date() }),
  }
});

// Configuración de la base de datos
export default defineDb({
  tables: {
    Category,
    Workflow,
    WorkflowFeature,
    WorkflowIntegration,
    WorkflowUseCase,
    WorkflowROIMetric,
    WorkflowTestimonial,
    WorkflowInclude,
    WorkflowFAQ,
    WorkflowAnalytics,
  }
});