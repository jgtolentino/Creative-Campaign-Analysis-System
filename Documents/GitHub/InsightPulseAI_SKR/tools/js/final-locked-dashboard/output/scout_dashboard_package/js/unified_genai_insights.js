/**
 * Unified GenAI Insights Integration
 * Enhances SQL analytics with GenAI-powered insights without model-specific indicators
 */

const UnifiedGenAI = (function() {
  // Initialize GenAI insights integration
  function init() {
    // Check if we're on a page with SQL analytics
    if (!document.getElementById('analytics-dashboard-container')) {
      return;
    }
    
    // Listen for SQL data visualization events
    document.addEventListener('sql-data-rendered', enhanceWithGenAIInsights);
    console.log('Unified GenAI initialized');
    
    // Add unified style to existing insights
    enhanceExistingInsights();
  }
  
  // Enhance SQL data visualization with GenAI insights
  function enhanceWithGenAIInsights(event) {
    if (!event.detail || !event.detail.reportType) return;
    
    const reportType = event.detail.reportType;
    const reportContainer = document.querySelector('.report-summary');
    
    if (!reportContainer) return;
    
    // Add unified GenAI badge to the insights summary
    const summaryTitle = reportContainer.querySelector('h4');
    if (summaryTitle && !summaryTitle.querySelector('.genai-badge')) {
      const badge = document.createElement('span');
      badge.className = 'genai-badge';
      badge.innerHTML = '<i class="fas fa-lightbulb me-1"></i> GenAI Enhanced';
      summaryTitle.appendChild(badge);
    }
    
    // Add GenAI explanation section if it doesn't exist
    if (!document.querySelector('.genai-explanation')) {
      const explanationDiv = document.createElement('div');
      explanationDiv.className = 'genai-explanation mt-4 p-3';
      
      explanationDiv.innerHTML = `
        <h5><i class="fas fa-lightbulb text-warning me-2"></i>GenAI Enhanced Analysis</h5>
        <p class="mb-2">This analysis uses artificial intelligence to provide deeper insights:</p>
        <ul class="mb-0 ps-3">
          <li>Pattern identification across complex datasets</li>
          <li>Statistical significance evaluation of trends</li>
          <li>Natural language explanation of metrics</li>
          <li>Context-aware recommendations</li>
        </ul>
      `;
      
      reportContainer.appendChild(explanationDiv);
    }
  }
  
  // Apply unified styling to existing insight elements
  function enhanceExistingInsights() {
    // Look for existing insight cards
    const insightCards = document.querySelectorAll('.insight-card');
    
    insightCards.forEach(card => {
      // Remove any model-specific badges
      const modelBadges = card.querySelectorAll('.model-badge, .model-indicator');
      modelBadges.forEach(badge => badge.remove());
      
      // Replace any model attribution text with generic AI generation text
      const attributionText = card.querySelector('.insight-footer');
      if (attributionText) {
        const dateText = attributionText.textContent.split('•')[1] || '';
        attributionText.innerHTML = `<i class="fas fa-robot"></i> Generated by AI • ${dateText.trim()}`;
      }
    });
  }
  
  // Generate unified GenAI insights for a specific data category
  function generateInsights(category, data) {
    // In a real implementation, this would call an API
    // For demonstration purposes, we'll return pre-defined insights
    
    const insights = [
      {
        text: 'Customer segments showing highest growth also demonstrate 37% higher brand loyalty metrics',
        confidenceScore: 0.92
      },
      {
        text: 'Weekend traffic patterns show new peak times that differ from historical averages',
        confidenceScore: 0.87
      },
      {
        text: 'Bundle promotions generating 23% higher average transaction value across all demographics',
        confidenceScore: 0.84
      }
    ];
    
    return insights;
  }
  
  // Return public API
  return {
    init: init,
    generateInsights: generateInsights
  };
})();

// Initialize when document is ready
document.addEventListener('DOMContentLoaded', UnifiedGenAI.init);