const express = require('express');

const app = express();

const projectRoutes = require('./routes/project');
const testimonialRoutes = require('./routes/testimonial');

app.use('/api/projects', projectRoutes);
app.use('/api/testimonial', testimonialRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => `Server running on port ${PORT}`);