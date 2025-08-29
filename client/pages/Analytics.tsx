import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import {
  TrendingUp,
  Users,
  BookOpen,
  Award,
  ArrowLeft,
  Download,
  Calendar,
  BarChart3,
  PieChart,
  Target,
  Clock,
  CheckCircle2,
  AlertTriangle,
  XCircle,
  GraduationCap,
  FileText,
  Briefcase,
  Building
} from "lucide-react";
import { useNavigate } from "react-router-dom";

// Sample analytics data
const analyticsData = {
  overallMetrics: {
    totalStudents: 5,
    totalAssessments: 127,
    avgProgress: 75,
    completionRate: 82,
    avgCGPA: 7.6,
    totalBacklogs: 6
  },
  skillProgress: [
    { skill: "Web Development", students: 5, avgProgress: 81, trend: "+5%" },
    { skill: "Data Structures", students: 5, avgProgress: 88, trend: "+8%" },
    { skill: "Database Management", students: 5, avgProgress: 79, trend: "+3%" },
    { skill: "Mobile Development", students: 5, avgProgress: 68, trend: "+12%" },
    { skill: "Machine Learning", students: 5, avgProgress: 73, trend: "+7%" }
  ],
  performanceDistribution: [
    { range: "90-100%", count: 1, percentage: 20, color: "bg-success" },
    { range: "80-89%", count: 1, percentage: 20, color: "bg-info" },
    { range: "70-79%", count: 1, percentage: 20, color: "bg-warning" },
    { range: "60-69%", count: 1, percentage: 20, color: "bg-warning" },
    { range: "Below 60%", count: 1, percentage: 20, color: "bg-destructive" }
  ],
  cgpaDistribution: [
    { range: "9.0-10.0", count: 1, percentage: 20, color: "bg-success" },
    { range: "8.0-8.9", count: 2, percentage: 40, color: "bg-info" },
    { range: "7.0-7.9", count: 1, percentage: 20, color: "bg-warning" },
    { range: "6.0-6.9", count: 1, percentage: 20, color: "bg-destructive" }
  ],
  backlogAnalysis: [
    { category: "No Backlogs", count: 3, percentage: 60, color: "bg-success" },
    { category: "1-2 Backlogs", count: 1, percentage: 20, color: "bg-warning" },
    { category: "3+ Backlogs", count: 1, percentage: 20, color: "bg-destructive" }
  ],
  activityTrend: [
    { period: "This Week", assessments: 15, submissions: 23 },
    { period: "Last Week", assessments: 12, submissions: 18 },
    { period: "2 Weeks Ago", assessments: 8, submissions: 14 },
    { period: "3 Weeks Ago", assessments: 10, submissions: 16 }
  ],
  studentStatus: [
    { status: "Active", count: 3, percentage: 60, color: "bg-success" },
    { status: "Needs Attention", count: 1, percentage: 20, color: "bg-warning" },
    { status: "At Risk", count: 1, percentage: 20, color: "bg-destructive" }
  ]
};

export default function Analytics() {
  const navigate = useNavigate();
  const [timeframe, setTimeframe] = useState("month");
  const [selectedMetric, setSelectedMetric] = useState("progress");

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-card">
        <div className="flex h-16 items-center justify-between px-6">
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="sm" onClick={() => navigate("/")}>
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Dashboard
            </Button>
            <div className="flex items-center gap-2">
              <BarChart3 className="h-6 w-6 text-primary" />
              <h1 className="text-xl font-bold">Supervisor Analytics Dashboard</h1>
            </div>
          </div>
          
          <div className="flex items-center gap-4">
            <Select value={timeframe} onValueChange={setTimeframe}>
              <SelectTrigger className="w-[140px]">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="week">This Week</SelectItem>
                <SelectItem value="month">This Month</SelectItem>
                <SelectItem value="quarter">This Quarter</SelectItem>
                <SelectItem value="year">This Year</SelectItem>
              </SelectContent>
            </Select>
            <Button variant="outline" size="sm">
              <Download className="h-4 w-4 mr-2" />
              Export Report
            </Button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="p-6 space-y-6">
        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-7 gap-6">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Students</CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{analyticsData.overallMetrics.totalStudents}</div>
              <p className="text-xs text-muted-foreground">
                <TrendingUp className="h-3 w-3 inline mr-1" />
                +12% from last month
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Avg Progress</CardTitle>
              <Target className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{analyticsData.overallMetrics.avgProgress}%</div>
              <p className="text-xs text-muted-foreground">
                <TrendingUp className="h-3 w-3 inline mr-1" />
                +5.2% from last month
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Completion Rate</CardTitle>
              <CheckCircle2 className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{analyticsData.overallMetrics.completionRate}%</div>
              <p className="text-xs text-muted-foreground">
                <TrendingUp className="h-3 w-3 inline mr-1" />
                +3.1% from last month
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Assessments</CardTitle>
              <Award className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{analyticsData.overallMetrics.totalAssessments}</div>
              <p className="text-xs text-muted-foreground">
                <TrendingUp className="h-3 w-3 inline mr-1" />
                +15 completed this week
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Avg CGPA</CardTitle>
              <GraduationCap className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{analyticsData.overallMetrics.avgCGPA}</div>
              <p className="text-xs text-muted-foreground">
                <TrendingUp className="h-3 w-3 inline mr-1" />
                +0.3 from last semester
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Backlogs</CardTitle>
              <AlertTriangle className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{analyticsData.overallMetrics.totalBacklogs}</div>
              <p className="text-xs text-muted-foreground">
                <TrendingUp className="h-3 w-3 inline mr-1" />
                -2 from last semester
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Placement Rate</CardTitle>
              <Briefcase className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">60%</div>
              <p className="text-xs text-muted-foreground">
                <TrendingUp className="h-3 w-3 inline mr-1" />
                +15% from last year
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Charts Row */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Skill Progress Chart */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BarChart3 className="h-5 w-5" />
                Skill Progress Overview
              </CardTitle>
              <CardDescription>
                Average progress across different technical skills
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {analyticsData.skillProgress.map((skill, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-medium">{skill.skill}</span>
                      <Badge variant="secondary" className="text-xs">
                        {skill.students} students
                      </Badge>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-bold">{skill.avgProgress}%</span>
                      <span className="text-xs text-success">{skill.trend}</span>
                    </div>
                  </div>
                  <Progress value={skill.avgProgress} className="h-2" />
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Performance Distribution */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <PieChart className="h-5 w-5" />
                Performance Distribution
              </CardTitle>
              <CardDescription>
                Distribution of students across performance ranges
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {analyticsData.performanceDistribution.map((range, index) => (
                <div key={index} className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className={`w-4 h-4 rounded ${range.color}`}></div>
                    <span className="text-sm font-medium">{range.range}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-sm">{range.count} students</span>
                    <span className="text-xs text-muted-foreground">({range.percentage}%)</span>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>

        {/* Activity Trends and Student Status */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Activity Trend */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Clock className="h-5 w-5" />
                Activity Trends
              </CardTitle>
              <CardDescription>
                Assessment and submission activity over time
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {analyticsData.activityTrend.map((period, index) => (
                  <div key={index} className="flex items-center justify-between p-3 rounded-lg bg-muted/50">
                    <div>
                      <div className="font-medium">{period.period}</div>
                      <div className="text-sm text-muted-foreground">
                        {period.assessments} assessments, {period.submissions} submissions
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-sm font-bold">{period.assessments + period.submissions}</div>
                      <div className="text-xs text-muted-foreground">total activities</div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Student Status */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Users className="h-5 w-5" />
                Student Status Breakdown
              </CardTitle>
              <CardDescription>
                Current status distribution of all students
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {analyticsData.studentStatus.map((status, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      {status.status === "Active" && <CheckCircle2 className="h-4 w-4 text-success" />}
                      {status.status === "Needs Attention" && <AlertTriangle className="h-4 w-4 text-warning" />}
                      {status.status === "At Risk" && <XCircle className="h-4 w-4 text-destructive" />}
                      <span className="text-sm font-medium">{status.status}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-bold">{status.count} students</span>
                      <span className="text-xs text-muted-foreground">({status.percentage}%)</span>
                    </div>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2">
                    <div 
                      className={`h-2 rounded-full ${status.color}`}
                      style={{ width: `${status.percentage}%` }}
                    />
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>

        {/* Academic Performance Insights */}
        <Card>
          <CardHeader>
            <CardTitle>Academic Performance Insights</CardTitle>
            <CardDescription>
              Comprehensive analysis of student academic and technical performance
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Academic Metrics Summary */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 rounded-lg border bg-card">
                <div className="flex items-center gap-2 mb-2">
                  <GraduationCap className="h-5 w-5 text-primary" />
                  <span className="font-medium">CGPA Performance</span>
                </div>
                <div className="space-y-1">
                  <div className="text-2xl font-bold">7.6</div>
                  <div className="text-sm text-muted-foreground">Average CGPA</div>
                  <div className="text-xs text-success">+0.3 from last semester</div>
                </div>
              </div>

              <div className="p-4 rounded-lg border bg-card">
                <div className="flex items-center gap-2 mb-2">
                  <AlertTriangle className="h-5 w-5 text-warning" />
                  <span className="font-medium">Backlogs Status</span>
                </div>
                <div className="space-y-1">
                  <div className="text-2xl font-bold">6</div>
                  <div className="text-sm text-muted-foreground">Total Backlogs</div>
                  <div className="text-xs text-success">-2 from last semester</div>
                </div>
              </div>

            </div>

            {/* Key Insights */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 rounded-lg border bg-success/10 border-success/20">
                <div className="flex items-center gap-2 mb-2">
                  <CheckCircle2 className="h-5 w-5 text-success" />
                  <span className="font-medium text-success">Academic Excellence</span>
                </div>
                <p className="text-sm text-muted-foreground">
                  2 students (Priya Patel, Sneha Gupta) maintain CGPA above 8.5 with zero backlogs. Excellent correlation between technical skills and academic performance.
                </p>
              </div>

              <div className="p-4 rounded-lg border bg-warning/10 border-warning/20">
                <div className="flex items-center gap-2 mb-2">
                  <AlertTriangle className="h-5 w-5 text-warning" />
                  <span className="font-medium text-warning">Academic Concerns</span>
                </div>
                <p className="text-sm text-muted-foreground">
                  Rahul Kumar shows declining academic performance with 2 backlogs. Vikram Singh has 4 backlogs and requires immediate academic intervention.
                </p>
              </div>

              <div className="p-4 rounded-lg border bg-info/10 border-info/20">
                <div className="flex items-center gap-2 mb-2">
                  <TrendingUp className="h-5 w-5 text-info" />
                  <span className="font-medium text-info">Skills-Academic Correlation</span>
                </div>
                <p className="text-sm text-muted-foreground">
                  Strong positive correlation between technical skill progress and CGPA. Students with higher technical skills show better academic performance.
                </p>
              </div>

              <div className="p-4 rounded-lg border bg-destructive/10 border-destructive/20">
                <div className="flex items-center gap-2 mb-2">
                  <XCircle className="h-5 w-5 text-destructive" />
                  <span className="font-medium text-destructive">Urgent Action Required</span>
                </div>
                <p className="text-sm text-muted-foreground">
                  Vikram Singh: 5.9 CGPA, 4 backlogs, 65% attendance. Comprehensive support plan needed including academic counseling and skill development.
                </p>
              </div>
            </div>

            {/* Recommendations */}
            <div className="p-4 rounded-lg border bg-primary/10 border-primary/20">
              <div className="flex items-center gap-2 mb-3">
                <FileText className="h-5 w-5 text-primary" />
                <span className="font-medium text-primary">Supervisor Recommendations</span>
              </div>
              <ul className="text-sm text-muted-foreground space-y-2">
                <li>• Schedule one-on-one mentoring sessions for students with backlogs</li>
                <li>• Create peer tutoring groups pairing high-performers with struggling students</li>
                <li>• Implement attendance monitoring alerts for students below 75%</li>
                <li>• Develop remedial courses for students with technical skill gaps</li>
                <li>• Establish monthly academic progress review meetings</li>
              </ul>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  );
}
