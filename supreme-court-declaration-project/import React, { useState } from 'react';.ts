import React, { useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, LineChart, Line } from 'recharts';

// Define our data types
type AdviceRating = {
  id: number;
  title: string;
  description: string;
  effectiveness: number;
  industryComparison: string;
  sophisticationLevel: string;
  potentialImpact: string;
  category: string;
  industryScore: number;
  riskLevel: 'Low' | 'Medium' | 'High';
  implementationComplexity: 'Simple' | 'Moderate' | 'Complex';
  timeframe: 'Immediate' | 'Short-term' | 'Long-term';
};

// Our data
const adviceData: AdviceRating[] = [
  {
    id: 1,
    title: "Document Contract vs. Reality Disparity",
    description: "Create a chronological record showing how your actual working hours consistently exceeded your contracted hours, with precise date stamps and manager communications.",
    effectiveness: 9,
    industryComparison: "Above Standard",
    sophisticationLevel: "Advanced",
    potentialImpact: "High",
    category: "Documentation",
    industryScore: 6.5,
    riskLevel: 'Low',
    implementationComplexity: 'Simple',
    timeframe: 'Immediate'
  },
  {
    id: 2,
    title: "Evidence Chain of Custody System",
    description: "Implement Ben's evidence organization system with categorized folders for screenshots, communications, contracts, and policy violations—all accessible in one secure location.",
    effectiveness: 9,
    industryComparison: "Far Above Standard",
    sophisticationLevel: "Expert",
    potentialImpact: "Very High",
    category: "Documentation",
    industryScore: 5,
    riskLevel: 'Low',
    implementationComplexity: 'Moderate',
    timeframe: 'Immediate'
  },
  {
    id: 3,
    title: "Leverage Procedural Rigidity",
    description: "Study your employer's procedural requirements and hold them to the exact same standards they impose on you—document every instance where they've failed to follow their own policies.",
    effectiveness: 10,
    industryComparison: "Revolutionary",
    sophisticationLevel: "Pioneering",
    potentialImpact: "Transformative",
    category: "Strategy",
    industryScore: 4,
    riskLevel: 'Medium',
    implementationComplexity: 'Complex',
    timeframe: 'Short-term'
  },
  {
    id: 4,
    title: "Compliance Threshold Documentation",
    description: "Similar to the BCA 95% compliance threshold mentioned in the immigration document, establish metrics showing your employer's compliance rate with labor laws and their own policies.",
    effectiveness: 8,
    industryComparison: "Far Above Standard",
    sophisticationLevel: "Expert",
    potentialImpact: "High",
    category: "Documentation",
    industryScore: 4.5,
    riskLevel: 'Medium',
    implementationComplexity: 'Complex',
    timeframe: 'Short-term'
  },
  {
    id: 5,
    title: "Red-Amber-Green System",
    description: "Categorize each element of your case by risk level, focusing resources on addressing the 'red' high-risk areas first while maintaining documentation of all levels.",
    effectiveness: 7,
    industryComparison: "Above Standard",
    sophisticationLevel: "Advanced",
    potentialImpact: "Medium",
    category: "Management",
    industryScore: 5,
    riskLevel: 'Low',
    implementationComplexity: 'Simple',
    timeframe: 'Immediate'
  },
  {
    id: 6,
    title: "Bespoke Action Plan with Measurables",
    description: "Create a structured timeline with specific goals, required evidence, and deadlines—similar to the 'bespoke action plan' mentioned for sponsors in the immigration document.",
    effectiveness: 8,
    industryComparison: "Above Standard",
    sophisticationLevel: "Advanced",
    potentialImpact: "High",
    category: "Management",
    industryScore: 5.5,
    riskLevel: 'Low',
    implementationComplexity: 'Moderate',
    timeframe: 'Immediate'
  },
  {
    id: 7,
    title: "Local Impact Narrative",
    description: "Document how your contributions benefit the local economy and community, creating a counternarrative to any claim that your employment is dispensable.",
    effectiveness: 6,
    industryComparison: "Standard",
    sophisticationLevel: "Intermediate",
    potentialImpact: "Medium",
    category: "Narrative",
    industryScore: 6,
    riskLevel: 'Low',
    implementationComplexity: 'Simple',
    timeframe: 'Short-term'
  },
  {
    id: 8,
    title: "Justice Minds Database Implementation",
    description: "Utilize Ben's database structure to organize all case materials with timestamps, categories, and accessibility for authorized representatives.",
    effectiveness: 10,
    industryComparison: "Revolutionary",
    sophisticationLevel: "Pioneering",
    potentialImpact: "Transformative",
    category: "Technology",
    industryScore: 3,
    riskLevel: 'Low',
    implementationComplexity: 'Moderate',
    timeframe: 'Immediate'
  },
  {
    id: 9,
    title: "Professional-Grade Documentation",
    description: "Record and document all meetings and conversations using Ben's documentary approach, ensuring everything is timestamped and professionally presented.",
    effectiveness: 9,
    industryComparison: "Far Above Standard",
    sophisticationLevel: "Expert",
    potentialImpact: "Very High",
    category: "Documentation",
    industryScore: 4,
    riskLevel: 'Medium',
    implementationComplexity: 'Moderate',
    timeframe: 'Immediate'
  },
  {
    id: 10,
    title: "Institutional Authority Manufacturing",
    description: "Present your case with formal letterhead, professional formatting, and institutional language that mirrors the authority of your employer's communications.",
    effectiveness: 8,
    industryComparison: "Far Above Standard",
    sophisticationLevel: "Expert",
    potentialImpact: "High",
    category: "Presentation",
    industryScore: 3.5,
    riskLevel: 'Medium',
    implementationComplexity: 'Simple',
    timeframe: 'Short-term'
  },
  {
    id: 11,
    title: "Decision-Maker Psychological Profiling",
    description: "Analyze the communication patterns and decision-making tendencies of managers and HR personnel to anticipate their responses and tailor your approach.",
    effectiveness: 10,
    industryComparison: "Revolutionary",
    sophisticationLevel: "Pioneering",
    potentialImpact: "Transformative",
    category: "Psychology",
    industryScore: 2,
    riskLevel: 'High',
    implementationComplexity: 'Complex',
    timeframe: 'Long-term'
  },
  {
    id: 12,
    title: "Forced Compliance Strategy",
    description: "Create a formal system requiring your employer to document their responses to your concerns within specific timeframes, establishing a record of their responsiveness.",
    effectiveness: 9,
    industryComparison: "Far Above Standard",
    sophisticationLevel: "Expert",
    potentialImpact: "Very High",
    category: "Strategy",
    industryScore: 3,
    riskLevel: 'High',
    implementationComplexity: 'Complex',
    timeframe: 'Short-term'
  },
  {
    id: 13,
    title: "Collation of Authority",
    description: "Assemble a team of qualified professionals (like Ben's example of 'a doctor, an MA holder, an MBA holder') to review and endorse your position.",
    effectiveness: 7,
    industryComparison: "Above Standard",
    sophisticationLevel: "Advanced",
    potentialImpact: "High",
    category: "Support",
    industryScore: 4,
    riskLevel: 'Medium',
    implementationComplexity: 'Complex',
    timeframe: 'Long-term'
  },
  {
    id: 14,
    title: "Public Scrutiny Risk Assessment",
    description: "Develop a document outlining the potential public relations implications of your case, highlighting how fair treatment aligns with the company's stated values.",
    effectiveness: 8,
    industryComparison: "Above Standard",
    sophisticationLevel: "Advanced",
    potentialImpact: "High",
    category: "Strategy",
    industryScore: 4.5,
    riskLevel: 'High',
    implementationComplexity: 'Moderate',
    timeframe: 'Short-term'
  },
  {
    id: 15,
    title: "Parallel Policy Framework",
    description: "Create your own comprehensive policy document that outlines proper employment practices, using it as a benchmark to measure your employer's actions against legal standards.",
    effectiveness: 9,
    industryComparison: "Revolutionary",
    sophisticationLevel: "Pioneering",
    potentialImpact: "Very High",
    category: "Documentation",
    industryScore: 3,
    riskLevel: 'Medium',
    implementationComplexity: 'Complex',
    timeframe: 'Long-term'
  }
];

// Calculate composite scores for each strategy
const dataWithScores = adviceData.map(item => ({
  ...item,
  innovationGap: item.effectiveness - item.industryScore,
  overallScore: (item.effectiveness * 0.4) + 
                ((item.industryComparison === "Revolutionary" ? 10 : 
                  item.industryComparison === "Far Above Standard" ? 8 :
                  item.industryComparison === "Above Standard" ? 6 :
                  item.industryComparison === "Standard" ? 4 : 2) * 0.3) +
                ((item.sophisticationLevel === "Pioneering" ? 10 :
                  item.sophisticationLevel === "Expert" ? 8 :
                  item.sophisticationLevel === "Advanced" ? 6 :
                  item.sophisticationLevel === "Intermediate" ? 4 : 2) * 0.1) +
                ((item.potentialImpact === "Transformative" ? 10 :
                  item.potentialImpact === "Very High" ? 8 :
                  item.potentialImpact === "High" ? 6 :
                  item.potentialImpact === "Medium" ? 4 : 2) * 0.2)
}));

// Calculating category averages for radar chart
const categories = [...new Set(adviceData.map(item => item.category))];
const categoryData = categories.map(category => {
  const categoryItems = dataWithScores.filter(item => item.category === category);
  return {
    category,
    effectiveness: categoryItems.reduce((sum, item) => sum + item.effectiveness, 0) / categoryItems.length,
    industryScore: categoryItems.reduce((sum, item) => sum + item.industryScore, 0) / categoryItems.length,
    innovationGap: categoryItems.reduce((sum, item) => sum + (item.effectiveness - item.industryScore), 0) / categoryItems.length,
    count: categoryItems.length
  };
});

// For implementation matrix
const implementationData = [
  { complexity: 'Simple', immediate: 0, shortTerm: 0, longTerm: 0 },
  { complexity: 'Moderate', immediate: 0, shortTerm: 0, longTerm: 0 },
  { complexity: 'Complex', immediate: 0, shortTerm: 0, longTerm: 0 }
];

// Populate implementation matrix data
adviceData.forEach(item => {
  const complexityIndex = item.implementationComplexity === 'Simple' ? 0 : 
                          item.implementationComplexity === 'Moderate' ? 1 : 2;
  
  if (item.timeframe === 'Immediate') {
    implementationData[complexityIndex].immediate += 1;
  } else if (item.timeframe === 'Short-term') {
    implementationData[complexityIndex].shortTerm += 1;
  } else {
    implementationData[complexityIndex].longTerm += 1;
  }
});

// Main component
const AdvocacyDashboard = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedAdvice, setSelectedAdvice] = useState<AdviceRating | null>(null);
  const [viewMode, setViewMode] = useState<'overview' | 'detail' | 'comparison' | 'implementation'>('overview');
  
  const filteredData = selectedCategory 
    ? dataWithScores.filter(item => item.category === selectedCategory)
    : dataWithScores;

  // Sort data by overall score descending
  const sortedData = [...filteredData].sort((a, b) => b.overallScore - a.overallScore);

  const handleAdviceClick = (advice: AdviceRating) => {
    setSelectedAdvice(advice);
    setViewMode('detail');
  };

  const handleCategoryClick = (category: string) => {
    setSelectedCategory(selectedCategory === category ? null : category);
    setViewMode('overview');
  };

  const getIndustryComparisonColor = (comparison: string) => {
    switch (comparison) {
      case 'Revolutionary': return '#2E7D32';
      case 'Far Above Standard': return '#388E3C';
      case 'Above Standard': return '#689F38';
      case 'Standard': return '#FBC02D';
      default: return '#FB8C00';
    }
  };

  const getEffectivenessBarColor = (score: number) => {
    if (score >= 9) return '#2E7D32';
    if (score >= 7) return '#388E3C';
    if (score >= 5) return '#689F38';
    if (score >= 3) return '#FBC02D';
    return '#FB8C00';
  };

  const formatForBarChart = (data: typeof dataWithScores) => {
    return data.map(item => ({
      name: item.title.length > 20 ? item.title.substring(0, 20) + '...' : item.title,
      Ben: item.effectiveness,
      Industry: item.industryScore,
      Gap: item.innovationGap,
      fullTitle: item.title,
      id: item.id
    }));
  };

  const renderOverview = () => (
    <div className="space-y-8">
      <div className="bg-white rounded-lg shadow-lg p-4">
        <h2 className="text-xl font-bold mb-4">Innovation Analysis: Ben's Advocacy vs. Industry Standards</h2>
        <p className="mb-4">This dashboard analyzes the 15 strategic advocacy techniques recommended by Ben, comparing them against standard industry practices for employment dispute resolution.</p>
        
        <div className="flex flex-wrap justify-between gap-4 mb-6">
          <div className="bg-green-50 p-4 rounded-lg border border-green-200 flex-1 min-w-64">
            <h3 className="font-bold text-green-800">Top 3 Most Innovative Strategies</h3>
            <ol className="mt-2 space-y-2">
              {sortedData.slice(0, 3).map(item => (
                <li key={item.id} className="flex items-center">
                  <span className="text-green-700 font-semibold mr-2">{item.id}.</span>
                  <button 
                    onClick={() => handleAdviceClick(item)}
                    className="text-left hover:text-green-700 hover:underline"
                  >
                    {item.title}
                  </button>
                </li>
              ))}
            </ol>
          </div>
          
          <div className="bg-purple-50 p-4 rounded-lg border border-purple-200 flex-1 min-w-64">
            <h3 className="font-bold text-purple-800">Categories with Highest Innovation Gap</h3>
            <ol className="mt-2 space-y-2">
              {[...categoryData].sort((a, b) => b.innovationGap - a.innovationGap).slice(0, 3).map((cat, idx) => (
                <li key={cat.category} className="flex items-center">
                  <span className="text-purple-700 font-semibold mr-2">{idx + 1}.</span>
                  <button 
                    onClick={() => handleCategoryClick(cat.category)}
                    className="text-left hover:text-purple-700 hover:underline"
                  >
                    {cat.category} (+{cat.innovationGap.toFixed(1)} points)
                  </button>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-lg p-4">
        <h2 className="text-xl font-bold mb-4">Effectiveness Comparison by Strategy</h2>
        <ResponsiveContainer width="100%" height={400}>
          <BarChart
            data={formatForBarChart(sortedData)}
            margin={{
              top: 20,
              right: 30,
              left: 20,
              bottom: 100,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis 
              dataKey="name" 
              angle={-45} 
              textAnchor="end" 
              height={80} 
              tick={{ fontSize: 12 }}
              interval={0}
            />
            <YAxis label={{ value: 'Score (1-10)', angle: -90, position: 'insideLeft' }} />
            <Tooltip 
              formatter={(value, name, props) => [value, name === 'fullTitle' ? '' : name]}
              labelFormatter={(label, props) => {
                const item = props[0]?.payload;
                return item ? item.fullTitle : label;
              }}
            />
            <Legend />
            <Bar dataKey="Ben" fill="#4CAF50" name="Ben's Strategy" />
            <Bar dataKey="Industry" fill="#2196F3" name="Industry Standard" />
          </BarChart>
        </ResponsiveContainer>
      </div>
      
      <div className="bg-white rounded-lg shadow-lg p-4">
        <h2 className="text-xl font-bold mb-4">Strategy Categories Analysis</h2>
        <div className="flex flex-col lg:flex-row">
          <div className="lg:w-1/2">
            <ResponsiveContainer width="100%" height={400}>
              <RadarChart outerRadius={150} data={categoryData}>
                <PolarGrid />
                <PolarAngleAxis dataKey="category" />
                <PolarRadiusAxis angle={30} domain={[0, 10]} />
                <Radar
                  name="Ben's Strategy"
                  dataKey="effectiveness"
                  stroke="#4CAF50"
                  fill="#4CAF50"
                  fillOpacity={0.5}
                />
                <Radar
                  name="Industry Standard"
                  dataKey="industryScore"
                  stroke="#2196F3"
                  fill="#2196F3"
                  fillOpacity={0.5}
                />
                <Legend />
              </RadarChart>
            </ResponsiveContainer>
          </div>
          
          <div className="lg:w-1/2 mt-4 lg:mt-0">
            <h3 className="font-bold text-gray-700 mb-2">Category Breakdown</h3>
            <div className="space-y-2">
              {categoryData.map(cat => (
                <button
                  key={cat.category}
                  className={`block w-full text-left p-3 rounded-lg transition ${
                    selectedCategory === cat.category 
                      ? 'bg-blue-100 border-blue-300 border' 
                      : 'bg-gray-50 hover:bg-gray-100 border border-gray-200'
                  }`}
                  onClick={() => handleCategoryClick(cat.category)}
                >
                  <div className="flex justify-between items-center">
                    <span className="font-semibold">{cat.category}</span>
                    <span className="text-sm bg-blue-50 text-blue-700 px-2 py-1 rounded">
                      {cat.count} strategies
                    </span>
                  </div>
                  <div className="mt-2 flex items-center text-sm">
                    <span className="w-32">Innovation Gap:</span>
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                      <div 
                        className="bg-green-600 h-2.5 rounded-full" 
                        style={{ width: `${Math.min(100, cat.innovationGap * 10)}%` }}
                      ></div>
                    </div>
                    <span className="ml-2 font-medium">+{cat.innovationGap.toFixed(1)}</span>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
      
      <button
        onClick={() => setViewMode('implementation')}
        className="w-full p-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition"
      >
        View Implementation Matrix
      </button>
    </div>
  );

  const renderDetail = () => {
    if (!selectedAdvice) return null;
    
    return (
      <div className="bg-white rounded-lg shadow-lg p-6">
        <div className="flex justify-between items-start mb-4">
          <h2 className="text-2xl font-bold text-gray-800">{selectedAdvice.title}</h2>
          <button 
            onClick={() => {
              setSelectedAdvice(null);
              setViewMode('overview');
            }}
            className="text-gray-500 hover:text-gray-700"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        
        <div className="mb-6 p-4 bg-gray-50 rounded-lg border border-gray-200">
          <p className="text-gray-700">{selectedAdvice.description}</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div className="bg-indigo-50 p-4 rounded-lg border border-indigo-100">
            <h3 className="font-bold text-indigo-800 mb-2">Strategy Assessment</h3>
            
            <div className="space-y-3">
              <div>
                <div className="flex justify-between items-center mb-1">
                  <span className="text-sm font-medium text-gray-700">Effectiveness</span>
                  <span className="text-sm font-bold">{selectedAdvice.effectiveness}/10</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <div 
                    className="h-2.5 rounded-full" 
                    style={{ 
                      width: `${selectedAdvice.effectiveness * 10}%`,
                      backgroundColor: getEffectivenessBarColor(selectedAdvice.effectiveness)
                    }}
                  ></div>
                </div>
              </div>
              
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-sm font-medium text-gray-700">Industry Comparison</span>
                  <span 
                    className="text-sm font-bold"
                    style={{ color: getIndustryComparisonColor(selectedAdvice.industryComparison) }}
                  >
                    {selectedAdvice.industryComparison}
                  </span>
                </div>
              </div>
              
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-sm font-medium text-gray-700">Sophistication Level</span>
                  <span className="text-sm font-bold">{selectedAdvice.sophisticationLevel}</span>
                </div>
              </div>
              
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-sm font-medium text-gray-700">Potential Impact</span>
                  <span className="text-sm font-bold">{selectedAdvice.potentialImpact}</span>
                </div>
              </div>
              
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-sm font-medium text-gray-700">Category</span>
                  <span className="text-sm font-bold">{selectedAdvice.category}</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-teal-50 p-4 rounded-lg border border-teal-100">
            <h3 className="font-bold text-teal-800 mb-2">Implementation Factors</h3>
            
            <div className="space-y-4">
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-sm font-medium text-gray-700">Risk Level</span>
                  <span className={`text-sm font-bold px-2 py-1 rounded ${
                    selectedAdvice.riskLevel === 'High' ? 'bg-red-100 text-red-800' :
                    selectedAdvice.riskLevel === 'Medium' ? 'bg-yellow-100 text-yellow-800' :
                    'bg-green-100 text-green-800'
                  }`}>
                    {selectedAdvice.riskLevel}
                  </span>
                </div>
              </div>
              
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-sm font-medium text-gray-700">Implementation Complexity</span>
                  <span className={`text-sm font-bold px-2 py-1 rounded ${
                    selectedAdvice.implementationComplexity === 'Complex' ? 'bg-purple-100 text-purple-800' :
                    selectedAdvice.implementationComplexity === 'Moderate' ? 'bg-blue-100 text-blue-800' :
                    'bg-green-100 text-green-800'
                  }`}>
                    {selectedAdvice.implementationComplexity}
                  </span>
                </div>
              </div>
              
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-sm font-medium text-gray-700">Timeframe</span>
                  <span className={`text-sm font-bold px-2 py-1 rounded ${
                    selectedAdvice.timeframe === 'Long-term' ? 'bg-indigo-100 text-indigo-800' :
                    selectedAdvice.timeframe === 'Short-term' ? 'bg-cyan-100 text-cyan-800' :
                    'bg-emerald-100 text-emerald-800'
                  }`}>
                    {selectedAdvice.timeframe}
                  </span>
                </div>
              </div>
              
              <div className="mt-4">
                <h4 className="font-semibold text-gray-700 mb-2">Innovation Gap</h4>
                <div className="flex items-center">
                  <div className="flex-1">
                    <div className="flex justify-between mb-1">
                      <span className="text-xs text-gray-500">Industry Standard</span>
                      <span className="text-xs text-gray-500">Ben's Strategy</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-4 relative">
                      <div className="absolute inset-0 flex items-center justify-center text-xs font-bold">
                        +{(selectedAdvice.effectiveness - selectedAdvice.industryScore).toFixed(1)}
                      </div>
                      <div 
                        className="h-4 rounded-full bg-blue-500" 
                        style={{ width: `${selectedAdvice.industryScore * 10}%` }}
                      ></div>
                      <div 
                        className="h-4 rounded-r-full bg-green-500" 
                        style={{ 
                          width: `${(selectedAdvice.effectiveness - selectedAdvice.industryScore) * 10}%`,
                          marginLeft: `${selectedAdvice.industryScore * 10}%`
                        }}
                      ></div>
                    </div>
                  </div>
                  <div className="ml-4 w-16 text-right">
                    <span className="text-lg font-bold">{selectedAdvice.effectiveness}/10</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="bg-orange-50 p-4 rounded-lg border border-orange-100 mb-6">
          <h3 className="font-bold text-orange-800 mb-2">UK Legal Context</h3>
          <p className="text-gray-700">
            This strategy aligns with UK employment law principles where 
            {selectedAdvice.category === 'Documentation' && ' comprehensive documentation is essential for tribunal claims and provides objective evidence when challenging unfair treatment.'}
            {selectedAdvice.category === 'Strategy' && ' procedural fairness is a core principle in employment disputes, and employers are expected to follow their own procedures consistently.'}
            {selectedAdvice.category === 'Management' && ' establishing clear timelines and organized approaches demonstrates reasonable conduct and professional engagement with dispute resolution processes.'}
            {selectedAdvice.category === 'Narrative' && ' establishing your value to the organization can support claims related to unequal treatment or unjustified actions against you.'}
            {selectedAdvice.category === 'Technology' && ' structured evidence management systems enhance credibility and ensure nothing crucial is overlooked in complex employment disputes.'}
            {selectedAdvice.category === 'Presentation' && ' professional presentation of claims is vital for being taken seriously by employers, mediators, and potentially employment tribunals.'}
            {selectedAdvice.category === 'Psychology' && ' understanding the motivations and decision patterns of key stakeholders can be crucial in negotiation and dispute resolution settings.'}
            {selectedAdvice.category === 'Support' && ' having qualified professionals support your position adds legitimacy and can counterbalance power imbalances in employment disputes.'}
          </p>
        </div>
        
        <div className="flex space-x-4">
          <button
            onClick={() => setViewMode('overview')}
            className="px-4 py-2 bg-gray-200 text-gray-800 rounded hover:bg-gray-300 transition"
          >
            Back to Overview
          </button>
          
          <button
            onClick={() => setViewMode('comparison')}
            className="px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700 transition"
          >
            Compare with Industry Practices
          </button>
        </div>
      </div>
    );
  };

  const renderComparison = () => {
    if (!selectedAdvice) return null;
    
    const industryPractice = {
      title: "Standard Industry Approach",
      description: selectedAdvice.category === 'Documentation' ? "Basic documentation of incidents with minimal structure or chronology. Often informal and reactive rather than proactive." :
                 selectedAdvice.category === 'Strategy' ? "Following standard grievance procedures without leveraging procedural requirements against employers." :
                 selectedAdvice.category === 'Management' ? "Basic organization of case elements without systematic prioritization or action planning." :
                 selectedAdvice.category === 'Narrative' ? "Simple statements of personal impact without strategic narrative development." :
                 selectedAdvice.category === 'Technology' ? "Basic file storage without specialized organization systems or technological advantages." :
                 selectedAdvice.category === 'Presentation' ? "Standard formal communications without deliberate authority signaling." :
                 selectedAdvice.category === 'Psychology' ? "Minimal consideration of decision-makers' psychology or communication patterns." :
                 "General approach without specialized strategic elements.",
      advantages: selectedAdvice.category === 'Documentation' ? ["Simplicity", "Lower time investment", "Familiar approach"] :
                selectedAdvice.category === 'Strategy' ? ["Less confrontational", "Simpler to implement", "Lower risk of escalation"] :
                selectedAdvice.category === 'Management' ? ["Less overhead", "Flexibility", "Simpler to maintain"] :
                selectedAdvice.category === 'Narrative' ? ["Less resource-intensive", "Straightforward approach", "Widely understood"] :
                selectedAdvice.category === 'Technology' ? ["Minimal technical requirements", "No specialized systems needed", "Lower barrier to entry"] :
                selectedAdvice.category === 'Presentation' ? ["Less effort required", "Natural communication style", "No special formatting needed"] :
                selectedAdvice.category === 'Psychology' ? ["Ethical simplicity", "Transparent approach", "Lower research burden"] :
                selectedAdvice.category === 'Support' ? ["Lower coordination requirements", "Reduced dependency on others", "More self-contained approach"] :
                ["Simplicity", "Lower resource requirement", "Conventional approach"],
      disadvantages: selectedAdvice.category === 'Documentation' ? ["Lower evidential value", "Lacks systematic approach", "May miss crucial details"] :
                    selectedAdvice.category === 'Strategy' ? ["Power imbalance remains", "Employer maintains procedural advantage", "Less leverage in negotiations"] :
                    selectedAdvice.category === 'Management' ? ["No prioritization framework", "Inefficient resource allocation", "Reactive rather than proactive"] :
                    selectedAdvice.category === 'Narrative' ? ["Weaker persuasive impact", "Fails to create compelling counter-narrative", "Less strategic positioning"] :
                    selectedAdvice.category === 'Technology' ? ["Disorganized evidence", "Difficulty locating specific items", "No chain of custody protection"] :
                    selectedAdvice.category === 'Presentation' ? ["Lower perceived authority", "Less formal impact", "May not be taken as seriously"] :
                    selectedAdvice.category === 'Psychology' ? ["Less predictive ability", "Inability to anticipate responses", "Tactical disadvantage"] :
                    selectedAdvice.category === 'Support' ? ["Lack of expert validation", "Lower credibility", "No interdisciplinary perspective"] :
                    ["Less strategic advantage", "Lower effectiveness", "Conventional limitations"]
    };
    
    return (
      <div className="bg-white rounded-lg shadow-lg p-6">
        <div className="flex justify-between items-start mb-6">
          <h2 className="text-2xl font-bold text-gray-800">Strategy Comparison</h2>
          <button 
            onClick={() => setViewMode('detail')}
            className="text-gray-500 hover:text-gray-700"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div className="bg-green-50 p-4 rounded-lg border border-green-200">
            <h3 className="font-bold text-green-800 mb-2">Ben's Approach: {selectedAdvice.title}</h3>
            <p className="text-gray-700 mb-4">{selectedAdvice.description}</p>
            
            <h4 className="font-semibold text-green-700 mb-2">Key Advantages</h4>
            <ul className="list-disc pl-5 mb-4 space-y-1">
              {selectedAdvice.category === 'Documentation' && [
                "Comprehensive chronological evidence", 
                "Establishes clear patterns of behavior",
                "Higher evidential value in disputes",
                "Preemptively addresses counter-arguments"
              ].map((item, i) => <li key={i}>{item}</li>)}
              
              {selectedAdvice.category === 'Strategy' && [
                "Reverses power dynamics in procedural matters",
                "Creates accountability for employer's own standards",
                "Establishes pattern of procedural violations",
                "Strong leverage in negotiations"
              ].map((item, i) => <li key={i}>{item}</li>)}
              
              {selectedAdvice.category === 'Management' && [
                "Strategic prioritization of case elements",
                "Efficient resource allocation",
                "Clear measurement of progress",
                "Proactive rather than reactive approach"
              ].map((item, i) => <li key={i}>{item}</li>)}
              
              {selectedAdvice.category === 'Narrative' && [
                "Creates compelling counter-narrative",
                "Shifts focus to broader value proposition",
                "Contextualizes dispute within community impact",
                "Makes dismissal of concerns more difficult"
              ].map((item, i) => <li key={i}>{item}</li>)}
              
              {selectedAdvice.category === 'Technology' && [
                "Superior evidence organization",
                "Ensures nothing is overlooked",
                "Establishes chain of custody",
                "Facilitates rapid access to specific evidence"
              ].map((item, i) => <li key={i}>{item}</li>)}
              
              {selectedAdvice.category === 'Presentation' && [
                "Creates perception of institutional backing",
                "Establishes authority in communications",
                "Elevates seriousness of response required",
                "Levels playing field with corporate communications"
              ].map((item, i) => <li key={i}>{item}</li>)}
              
              {selectedAdvice.category === 'Psychology' && [
                "Anticipates responses and counterarguments",
                "Allows tactical communication adjustments",
                "Creates strategic advantage in negotiations",
                "Enables preemptive addressing of concerns"
              ].map((item, i) => <li key={i}>{item}</li>)}
              
              {selectedAdvice.category === 'Support' && [
                "Adds multi-disciplinary credibility",
                "Creates perception of broader support",
                "Introduces expert validation of position",
                "Counterbalances employer's professional resources"
              ].map((item, i) => <li key={i}>{item}</li>)}
            </ul>
            
            <h4 className="font-semibold text-green-700 mb-2">Effectiveness Rating</h4>
            <div className="flex items-center">
              <div className="flex-1">
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <div 
                    className="h-2.5 rounded-full bg-green-600" 
                    style={{ width: `${selectedAdvice.effectiveness * 10}%` }}
                  ></div>
                </div>
              </div>
              <span className="ml-3 font-bold">{selectedAdvice.effectiveness}/10</span>
            </div>
          </div>
          
          <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
            <h3 className="font-bold text-blue-800 mb-2">{industryPractice.title}</h3>
            <p className="text-gray-700 mb-4">{industryPractice.description}</p>
            
            <h4 className="font-semibold text-blue-700 mb-2">Common Approach</h4>
            <ul className="list-disc pl-5 mb-4 space-y-1">
              {industryPractice.advantages.map((item, i) => <li key={i}>{item}</li>)}
            </ul>
            
            <h4 className="font-semibold text-blue-700 mb-2">Key Limitations</h4>
            <ul className="list-disc pl-5 mb-4 space-y-1">
              {industryPractice.disadvantages.map((item, i) => <li key={i}>{item}</li>)}
            </ul>
            
            <h4 className="font-semibold text-blue-700 mb-2">Industry Standard Rating</h4>
            <div className="flex items-center">
              <div className="flex-1">
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <div 
                    className="h-2.5 rounded-full bg-blue-600" 
                    style={{ width: `${selectedAdvice.industryScore * 10}%` }}
                  ></div>
                </div>
              </div>
              <span className="ml-3 font-bold">{selectedAdvice.industryScore}/10</span>
            </div>
          </div>
        </div>
        
        <div className="bg-purple-50 p-4 rounded-lg border border-purple-200 mb-6">
          <h3 className="font-bold text-purple-800 mb-2">Innovation Analysis</h3>
          
          <div className="mb-4">
            <h4 className="font-semibold text-purple-700 mb-2">Innovation Gap</h4>
            <div className="flex items-center">
              <div className="flex-1">
                <div className="w-full bg-gray-200 rounded-full h-6 relative">
                  <div className="absolute inset-0 flex items-center justify-center text-xs font-bold">
                    +{(selectedAdvice.effectiveness - selectedAdvice.industryScore).toFixed(1)} points
                  </div>
                  <div 
                    className="h-6 rounded-l-full bg-blue-500" 
                    style={{ width: `${selectedAdvice.industryScore * 10}%` }}
                  ></div>
                  <div 
                    className="h-6 rounded-r-full bg-green-500" 
                    style={{ 
                      width: `${(selectedAdvice.effectiveness - selectedAdvice.industryScore) * 10}%`,
                      marginLeft: `${selectedAdvice.industryScore * 10}%`
                    }}
                  ></div>
                </div>
                <div className="flex justify-between mt-1 text-xs text-gray-500">
                  <span>Industry Standard: {selectedAdvice.industryScore}/10</span>
                  <span>Ben's Strategy: {selectedAdvice.effectiveness}/10</span>
                </div>
              </div>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold text-purple-700 mb-2">Key Innovations</h4>
            <ul className="list-disc pl-5 space-y-1">
              {selectedAdvice.category === 'Documentation' && [
                "Chronological structuring with precise timestamps",
                "Integration of manager communications as evidence",
                "Systematic categorization system",
                "Emphasis on chain of custody for evidence integrity"
              ].map((item, i) => <li key={i}>{item}</li>)}
              
              {selectedAdvice.category === 'Strategy' && [
                "Turning procedural requirements back on employers",
                "Systematic documentation of policy violations",
                "Creating accountability frameworks for employer responses",
                "Use of employer's own standards as measurement benchmarks"
              ].map((item, i) => <li key={i}>{item}</li>)}
              
              {selectedAdvice.category === 'Management' && [
                "Risk-based prioritization system",
                "Structured timeline with measurable outcomes",
                "Resource allocation based on strategic importance",
                "Integration of metrics and measurement frameworks"
              ].map((item, i) => <li key={i}>{item}</li>)}
              
              {selectedAdvice.category === 'Narrative' && [
                "Economic and community impact framing",
                "Strategic counter-narrative development",
                "Value proposition articulation",
                "Contextualizing individual contribution within broader impact"
              ].map((item, i) => <li key={i}>{item}</li>)}
              
              {selectedAdvice.category === 'Technology' && [
                "Specialized database implementation",
                "Timestamp and categorization systems",
                "Representative accessibility features",
                "Professional-grade documentation technology"
              ].map((item, i) => <li key={i}>{item}</li>)}
              
              {selectedAdvice.category === 'Presentation' && [
                "Strategic use of institutional formatting",
                "Authority signaling through communication style",
                "Formality calibration to match employer communications",
                "Deliberate use of professional presentation elements"
              ].map((item, i) => <li key={i}>{item}</li>)}
              
              {selectedAdvice.category === 'Psychology' && [
                "Systematic analysis of communication patterns",
                "Decision-making tendency profiling",
                "Response anticipation frameworks",
                "Tailored communication strategy development"
              ].map((item, i) => <li key={i}>{item}</li>)}
              
              {selectedAdvice.category === 'Support' && [
                "Multi-disciplinary team assembly",
                "Strategic qualification selection",
                "Position endorsement protocol",
                "Professional review framework implementation"
              ].map((item, i) => <li key={i}>{item}</li>)}
            </ul>
          </div>
        </div>
        
        <div className="flex space-x-4">
          <button
            onClick={() => setViewMode('detail')}
            className="px-4 py-2 bg-gray-200 text-gray-800 rounded hover:bg-gray-300 transition"
          >
            Back to Details
          </button>
          
          <button
            onClick={() => setViewMode('overview')}
            className="px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700 transition"
          >
            Return to Overview
          </button>
        </div>
      </div>
    );
  };

  const renderImplementationMatrix = () => {
    // Calculate quick wins, strategic projects, etc.
    const quickWins = adviceData.filter(item => 
      item.implementationComplexity === 'Simple' && 
      item.timeframe === 'Immediate'
    );
    
    const strategicProjects = adviceData.filter(item => 
      item.implementationComplexity === 'Complex' && 
      (item.timeframe === 'Short-term' || item.timeframe === 'Long-term')
    );
    
    const majorProjects = adviceData.filter(item => 
      item.implementationComplexity === 'Moderate' && 
      item.timeframe === 'Short-term'
    );
    
    const fillInProjects = adviceData.filter(item => 
      item.implementationComplexity === 'Simple' && 
      item.timeframe === 'Short-term'
    );
    
    return (
      <div className="bg-white rounded-lg shadow-lg p-6">
        <div className="flex justify-between items-start mb-6">
          <h2 className="text-2xl font-bold text-gray-800">Implementation Strategy Matrix</h2>
          <button 
            onClick={() => setViewMode('overview')}
            className="text-gray-500 hover:text-gray-700"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        
        <p className="mb-6 text-gray-700">
          This matrix organizes Ben's strategies by implementation complexity and timeframe, helping prioritize which approaches to adopt first for maximum impact with available resources.
        </p>
        
        <div className="grid grid-cols-3 gap-4 mb-8">
          <div className="text-center font-bold p-2 bg-gray-100">
            <span className="block text-gray-500 text-sm">Implementation</span>
            <span className="block text-gray-500 text-sm">Complexity</span>
          </div>
          <div className="text-center font-bold p-2 bg-green-100 text-green-800">Immediate</div>
          <div className="text-center font-bold p-2 bg-blue-100 text-blue-800">Short-term</div>
          
          <div className="text-center font-bold p-2 bg-green-100 text-green-800">Simple</div>
          <div className="p-2 bg-green-50 border border-green-200 h-32 overflow-y-auto">
            {adviceData.filter(item => 
              item.implementationComplexity === 'Simple' && item.timeframe === 'Immediate'
            ).map(item => (
              <button 
                key={item.id}
                onClick={() => handleAdviceClick(item)}
                className="block w-full text-left mb-2 text-sm hover:text-green-700 hover:underline"
              >
                {item.id}. {item.title}
              </button>
            ))}
          </div>
          <div className="p-2 bg-blue-50 border border-blue-200 h-32 overflow-y-auto">
            {adviceData.filter(item => 
              item.implementationComplexity === 'Simple' && item.timeframe === 'Short-term'
            ).map(item => (
              <button 
                key={item.id}
                onClick={() => handleAdviceClick(item)}
                className="block w-full text-left mb-2 text-sm hover:text-blue-700 hover:underline"
              >
                {item.id}. {item.title}
              </button>
            ))}
          </div>
          
          <div className="text-center font-bold p-2 bg-yellow-100 text-yellow-800">Moderate</div>
          <div className="p-2 bg-yellow-50 border border-yellow-200 h-32 overflow-y-auto">
            {adviceData.filter(item => 
              item.implementationComplexity === 'Moderate' && item.timeframe === 'Immediate'
            ).map(item => (
              <button 
                key={item.id}
                onClick={() => handleAdviceClick(item)}
                className="block w-full text-left mb-2 text-sm hover:text-yellow-700 hover:underline"
              >
                {item.id}. {item.title}
              </button>
            ))}
          </div>
          <div className="p-2 bg-yellow-50 border border-yellow-200 h-32 overflow-y-auto">
            {adviceData.filter(item => 
              item.implementationComplexity === 'Moderate' && item.timeframe === 'Short-term'
            ).map(item => (
              <button 
                key={item.id}
                onClick={() => handleAdviceClick(item)}
                className="block w-full text-left mb-2 text-sm hover:text-yellow-700 hover:underline"
              >
                {item.id}. {item.title}
              </button>
            ))}
          </div>
          
          <div className="text-center font-bold p-2 bg-red-100 text-red-800">Complex</div>
          <div className="p-2 bg-red-50 border border-red-200 h-32 overflow-y-auto">
            {adviceData.filter(item => 
              item.implementationComplexity === 'Complex' && item.timeframe === 'Immediate'
            ).map(item => (
              <button 
                key={item.id}
                onClick={() => handleAdviceClick(item)}
                className="block w-full text-left mb-2 text-sm hover:text-red-700 hover:underline"
              >
                {item.id}. {item.title}
              </button>
            ))}
            {adviceData.filter(item => 
              item.implementationComplexity === 'Complex' && item.timeframe === 'Immediate'
            ).length === 0 && (
              <span className="text-gray-500 text-sm italic">No strategies in this category</span>
            )}
          </div>
          <div className="p-2 bg-red-50 border border-red-200 h-32 overflow-y-auto">
            {adviceData.filter(item => 
              item.implementationComplexity === 'Complex' && (item.timeframe === 'Short-term' || item.timeframe === 'Long-term')
            ).map(item => (
              <button 
                key={item.id}
                onClick={() => handleAdviceClick(item)}
                className="block w-full text-left mb-2 text-sm hover:text-red-700 hover:underline"
              >
                {item.id}. {item.title} {item.timeframe === 'Long-term' ? '(Long-term)' : ''}
              </button>
            ))}
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div className="bg-green-50 p-4 rounded-lg border border-green-200">
            <h3 className="font-bold text-green-800 mb-2">Quick Wins (Implement First)</h3>
            <p className="text-sm text-gray-700 mb-3">Simple, immediate implementation with high impact:</p>
            
            <ul className="space-y-2">
              {quickWins.map(item => (
                <li key={item.id} className="flex items-start">
                  <span className="text-green-700 font-semibold mr-2">{item.id}.</span>
                  <div>
                    <button 
                      onClick={() => handleAdviceClick(item)}
                      className="text-left font-medium hover:text-green-700 hover:underline"
                    >
                      {item.title}
                    </button>
                    <p className="text-sm text-gray-600 mt-1">{item.description.substring(0, 100)}...</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="bg-purple-50 p-4 rounded-lg border border-purple-200">
            <h3 className="font-bold text-purple-800 mb-2">Strategic Projects (Plan Carefully)</h3>
            <p className="text-sm text-gray-700 mb-3">Complex implementation with long-term impact:</p>
            
            <ul className="space-y-2">
              {strategicProjects.slice(0, 3).map(item => (
                <li key={item.id} className="flex items-start">
                  <span className="text-purple-700 font-semibold mr-2">{item.id}.</span>
                  <div>
                    <button 
                      onClick={() => handleAdviceClick(item)}
                      className="text-left font-medium hover:text-purple-700 hover:underline"
                    >
                      {item.title}
                    </button>
                    <div className="flex items-center mt-1">
                      <span className={`text-xs px-2 py-1 rounded ${
                        item.effectiveness >= 9 ? 'bg-green-100 text-green-800' :
                        item.effectiveness >= 7 ? 'bg-green-100 text-green-800' :
                        'bg-yellow-100 text-yellow-800'
                      }`}>
                        Effectiveness: {item.effectiveness}/10
                      </span>
                      <span className="mx-2 text-gray-400">•</span>
                      <span className={`text-xs px-2 py-1 rounded ${
                        item.timeframe === 'Long-term' ? 'bg-indigo-100 text-indigo-800' : 'bg-blue-100 text-blue-800'
                      }`}>
                        {item.timeframe}
                      </span>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
            <h3 className="font-bold text-yellow-800 mb-2">Major Projects (Coordinate Resources)</h3>
            <p className="text-sm text-gray-700 mb-3">Moderate complexity with significant impact:</p>
            
            <ul className="space-y-2">
              {majorProjects.slice(0, 3).map(item => (
                <li key={item.id} className="flex items-start">
                  <span className="text-yellow-700 font-semibold mr-2">{item.id}.</span>
                  <div>
                    <button 
                      onClick={() => handleAdviceClick(item)}
                      className="text-left font-medium hover:text-yellow-700 hover:underline"
                    >
                      {item.title}
                    </button>
                    <p className="text-sm text-gray-600 mt-1">{item.description.substring(0, 80)}...</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
            <h3 className="font-bold text-blue-800 mb-2">Fill-In Projects (As Resources Allow)</h3>
            <p className="text-sm text-gray-700 mb-3">Simple implementation with short-term benefits:</p>
            
            <ul className="space-y-2">
              {fillInProjects.map(item => (
                <li key={item.id} className="flex items-start">
                  <span className="text-blue-700 font-semibold mr-2">{item.id}.</span>
                  <div>
                    <button 
                      onClick={() => handleAdviceClick(item)}
                      className="text-left font-medium hover:text-blue-700 hover:underline"
                    >
                      {item.title}
                    </button>
                    <p className="text-sm text-gray-600 mt-1">{item.description.substring(0, 80)}...</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="bg-gray-50 p-4 rounded-lg border border-gray-200 mb-6">
          <h3 className="font-bold text-gray-800 mb-2">UK Employment Law Context</h3>
          <p className="text-gray-700 mb-3">
            When implementing these strategies, remember that UK employment law provides significant protections, but procedural compliance is critical:
          </p>
          
          <ul className="list-disc pl-5 space-y-1 text-gray-700">
            <li>Document all communications with employers following ACAS early conciliation guidelines</li>
            <li>Adhere to grievance procedures before considering Employment Tribunal claims</li>
            <li>Be aware of strict time limits for raising disputes (typically three months minus one day)</li>
            <li>Consider whether your situation involves protected characteristics under the Equality Act 2010</li>
            <li>Remember that UK employment protections often require two years' service for unfair dismissal claims</li>
          </ul>
        </div>
        
        <button
          onClick={() => setViewMode('overview')}
          className="px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700 transition"
        >
          Return to Overview
        </button>
      </div>
    );
  };

  return (
    <div className="p-6 max-w-7xl mx-auto bg-gray-100 min-h-screen">
      <header className="bg-indigo-700 text-white p-4 rounded-lg shadow-lg mb-6">
        <h1 className="text-2xl font-bold">Strategic Advocacy Analysis</h1>
        <p className="opacity-90">Comparing Ben's Employment Dispute Strategies Against Industry Standards</p>
      </header>
      
      <div className="mb-6 flex flex-col sm:flex-row gap-4">
        <button
          onClick={() => setViewMode('overview')}
          className={`px-4 py-2 rounded-lg transition flex-1 ${
            viewMode === 'overview' 
              ? 'bg-indigo-600 text-white' 
              : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
          }`}
        >
          Overview
        </button>
        
        <button
          onClick={() => setViewMode('implementation')}
          className={`px-4 py-2 rounded-lg transition flex-1 ${
            viewMode === 'implementation' 
              ? 'bg-indigo-600 text-white' 
              : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
          }`}
        >
          Implementation Matrix
        </button>
        
        {selectedAdvice && (
          <button
            onClick={() => setViewMode('detail')}
            className={`px-4 py-2 rounded-lg transition flex-1 ${
              viewMode === 'detail' 
                ? 'bg-indigo-600 text-white' 
                : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
            }`}
          >
            Strategy Details
          </button>
        )}
        
        {selectedAdvice && (
          <button
            onClick={() => setViewMode('comparison')}
            className={`px-4 py-2 rounded-lg transition flex-1 ${
              viewMode === 'comparison' 
                ? 'bg-indigo-600 text-white' 
                : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
            }`}
          >
            Industry Comparison
          </button>
        )}
      </div>
      
      {viewMode === 'overview' && renderOverview()}
      {viewMode === 'detail' && renderDetail()}
      {viewMode === 'comparison' && renderComparison()}
      {viewMode === 'implementation' && renderImplementationMatrix()}
      
      <footer className="mt-8 text-center text-gray-500 text-sm">
        <p>Strategic Advocacy Analysis Dashboard | UK Employment Rights Context</p>
      </footer>
    </div>
  );
};

export default AdvocacyDashboard;