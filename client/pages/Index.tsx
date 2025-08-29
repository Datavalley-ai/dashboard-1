import { useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import {
  Users,
  BookOpen,
  Award,
  TrendingUp,
  Search,
  Filter,
  Download,
  Bell,
  Settings,
  LogOut,
  Code,
  Database,
  Globe,
  Smartphone,
  Brain,
  Trophy,
  GraduationCap,
  AlertCircle,
  Calendar,
  FileText,
  BarChart,
  Clock,
  Briefcase,
  Building,
  CheckCircle
} from "lucide-react";

// Sample data for the dashboard
const mockStudents = [
  {
    id: 1,
    name: "Arjun Sharma",
    rollNo: "CS2021001",
    department: "Computer Science",
    year: "3rd Year",
    email: "arjun.sharma@college.edu",
    avatar: "AS",
    skills: {
      "Web Development": 85,
      "Data Structures": 92,
      "Database Management": 78,
      "Mobile Development": 65,
      "Machine Learning": 71
    },
    overallProgress: 78,
    lastActive: "2 hours ago",
    status: "active",
    // Academic Information
    cgpa: 8.2,
    backlogs: 0,
    totalCredits: 180,
    completedCredits: 135,
    academicRecords: {
      semester1: { gpa: 8.0, credits: 20, status: "Passed" },
      semester2: { gpa: 8.1, credits: 22, status: "Passed" },
      semester3: { gpa: 8.3, credits: 21, status: "Passed" },
      semester4: { gpa: 8.4, credits: 23, status: "Passed" },
      semester5: { gpa: 8.2, credits: 24, status: "Passed" },
      semester6: { gpa: 8.1, credits: 25, status: "In Progress" }
    },
    // Placement Information
    placementStatus: "placed",
    placementDetails: {
      company: "TechCorp Solutions",
      package: "12 LPA",
      role: "Software Developer",
      placementDate: "2024-01-15"
    },
    applicationStats: {
      applied: 8,
      shortlisted: 5,
      interviewed: 3,
      offers: 2
    },
    projects: [
      { name: "E-commerce Website", grade: "A", course: "Web Development" },
      { name: "Student Management System", grade: "A+", course: "Database Management" }
    ]
  },
  {
    id: 2,
    name: "Priya Patel",
    rollNo: "CS2021002",
    department: "Computer Science",
    year: "3rd Year",
    email: "priya.patel@college.edu",
    avatar: "PP",
    skills: {
      "Web Development": 94,
      "Data Structures": 88,
      "Database Management": 91,
      "Mobile Development": 82,
      "Machine Learning": 76
    },
    overallProgress: 86,
    lastActive: "1 hour ago",
    status: "active",
    // Academic Information
    cgpa: 9.1,
    backlogs: 0,
    totalCredits: 180,
    completedCredits: 135,
    academicRecords: {
      semester1: { gpa: 9.0, credits: 20, status: "Passed" },
      semester2: { gpa: 9.2, credits: 22, status: "Passed" },
      semester3: { gpa: 9.1, credits: 21, status: "Passed" },
      semester4: { gpa: 9.0, credits: 23, status: "Passed" },
      semester5: { gpa: 9.3, credits: 24, status: "Passed" },
      semester6: { gpa: 8.9, credits: 25, status: "In Progress" }
    },
    // Placement Information
    placementStatus: "placed",
    placementDetails: {
      company: "Google India",
      package: "28 LPA",
      role: "Software Engineer",
      placementDate: "2024-02-20"
    },
    applicationStats: {
      applied: 12,
      shortlisted: 8,
      interviewed: 6,
      offers: 3
    },
    projects: [
      { name: "AI Chatbot", grade: "A+", course: "Machine Learning" },
      { name: "Mobile Banking App", grade: "A+", course: "Mobile Development" }
    ]
  },
  {
    id: 3,
    name: "Rahul Kumar",
    rollNo: "CS2021003",
    department: "Computer Science",
    year: "3rd Year",
    email: "rahul.kumar@college.edu",
    avatar: "RK",
    skills: {
      "Web Development": 72,
      "Data Structures": 69,
      "Database Management": 74,
      "Mobile Development": 58,
      "Machine Learning": 63
    },
    overallProgress: 67,
    lastActive: "1 day ago",
    status: "warning",
    // Academic Information
    cgpa: 6.8,
    backlogs: 2,
    totalCredits: 180,
    completedCredits: 115,
    academicRecords: {
      semester1: { gpa: 7.2, credits: 20, status: "Passed" },
      semester2: { gpa: 6.8, credits: 22, status: "Passed" },
      semester3: { gpa: 6.5, credits: 21, status: "Passed" },
      semester4: { gpa: 6.9, credits: 23, status: "Passed" },
      semester5: { gpa: 6.4, credits: 24, status: "2 Backlogs" },
      semester6: { gpa: 7.1, credits: 5, status: "In Progress" }
    },
    // Placement Information
    placementStatus: "searching",
    placementDetails: null,
    applicationStats: {
      applied: 15,
      shortlisted: 4,
      interviewed: 2,
      offers: 0
    },
    projects: [
      { name: "Library Management", grade: "B", course: "Database Management" },
      { name: "Basic Calculator", grade: "C+", course: "Web Development" }
    ]
  },
  {
    id: 4,
    name: "Sneha Gupta",
    rollNo: "CS2021004",
    department: "Computer Science",
    year: "3rd Year",
    email: "sneha.gupta@college.edu",
    avatar: "SG",
    skills: {
      "Web Development": 89,
      "Data Structures": 95,
      "Database Management": 87,
      "Mobile Development": 91,
      "Machine Learning": 84
    },
    overallProgress: 89,
    lastActive: "30 minutes ago",
    status: "active",
    // Academic Information
    cgpa: 8.9,
    backlogs: 0,
    totalCredits: 180,
    completedCredits: 135,
    academicRecords: {
      semester1: { gpa: 8.7, credits: 20, status: "Passed" },
      semester2: { gpa: 8.8, credits: 22, status: "Passed" },
      semester3: { gpa: 9.0, credits: 21, status: "Passed" },
      semester4: { gpa: 8.9, credits: 23, status: "Passed" },
      semester5: { gpa: 9.1, credits: 24, status: "Passed" },
      semester6: { gpa: 8.8, credits: 25, status: "In Progress" }
    },
    // Placement Information
    placementStatus: "placed",
    placementDetails: {
      company: "Microsoft",
      package: "22 LPA",
      role: "Software Development Engineer",
      placementDate: "2024-01-28"
    },
    applicationStats: {
      applied: 10,
      shortlisted: 7,
      interviewed: 5,
      offers: 2
    },
    projects: [
      { name: "Smart Home System", grade: "A+", course: "Machine Learning" },
      { name: "Social Media App", grade: "A", course: "Mobile Development" }
    ]
  },
  {
    id: 5,
    name: "Vikram Singh",
    rollNo: "CS2021005",
    department: "Computer Science",
    year: "3rd Year",
    email: "vikram.singh@college.edu",
    avatar: "VS",
    skills: {
      "Web Development": 61,
      "Data Structures": 58,
      "Database Management": 65,
      "Mobile Development": 43,
      "Machine Learning": 52
    },
    overallProgress: 56,
    lastActive: "3 days ago",
    status: "danger",
    // Academic Information
    cgpa: 5.9,
    backlogs: 4,
    totalCredits: 180,
    completedCredits: 95,
    academicRecords: {
      semester1: { gpa: 6.2, credits: 20, status: "Passed" },
      semester2: { gpa: 5.8, credits: 22, status: "1 Backlog" },
      semester3: { gpa: 5.5, credits: 18, status: "2 Backlogs" },
      semester4: { gpa: 6.0, credits: 20, status: "1 Backlog" },
      semester5: { gpa: 5.7, credits: 15, status: "3 Backlogs" },
      semester6: { gpa: 0.0, credits: 0, status: "Not Started" }
    },
    // Placement Information
    placementStatus: "not_started",
    placementDetails: null,
    applicationStats: {
      applied: 3,
      shortlisted: 0,
      interviewed: 0,
      offers: 0
    },
    projects: [
      { name: "Basic Website", grade: "C", course: "Web Development" },
      { name: "Simple Database", grade: "D+", course: "Database Management" }
    ]
  }
];

const skillIcons = {
  "Web Development": Globe,
  "Data Structures": Code,
  "Database Management": Database,
  "Mobile Development": Smartphone,
  "Machine Learning": Brain
};

export default function Index() {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const [filterStatus, setFilterStatus] = useState("all");
  const [filterYear, setFilterYear] = useState("all");
  const [isLoading, setIsLoading] = useState(false);

  const filteredStudents = useMemo(() => {
    try {
      return mockStudents.filter(student => {
        const matchesSearch = student.name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
                             student.rollNo?.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesStatus = filterStatus === "all" || student.status === filterStatus;
        const matchesYear = filterYear === "all" || student.year === filterYear;
        return matchesSearch && matchesStatus && matchesYear;
      });
    } catch (error) {
      console.error("Error filtering students:", error);
      return mockStudents;
    }
  }, [searchTerm, filterStatus, filterYear]);

  const overallStats = useMemo(() => {
    try {
      const totalStudents = mockStudents?.length || 0;
      const activeStudents = mockStudents?.filter(s => s.status === "active").length || 0;
      const avgProgress = totalStudents > 0
        ? Math.round(mockStudents.reduce((sum, s) => sum + (s.overallProgress || 0), 0) / totalStudents)
        : 0;
      const completedAssessments = 127; // Sample data

      return { totalStudents, activeStudents, avgProgress, completedAssessments };
    } catch (error) {
      console.error("Error calculating stats:", error);
      return { totalStudents: 0, activeStudents: 0, avgProgress: 0, completedAssessments: 0 };
    }
  }, []);

  const getStatusColor = (status: string) => {
    switch (status) {
      case "active": return "bg-success text-success-foreground";
      case "warning": return "bg-warning text-warning-foreground";
      case "danger": return "bg-destructive text-destructive-foreground";
      default: return "bg-muted text-muted-foreground";
    }
  };

  const getProgressColor = (progress: number) => {
    if (progress >= 80) return "bg-success";
    if (progress >= 60) return "bg-warning";
    return "bg-destructive";
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-card">
        <div className="flex h-16 items-center justify-between px-6">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-lg bg-primary flex items-center justify-center">
                <TrendingUp className="h-5 w-5 text-primary-foreground" />
              </div>
              <h1 className="text-xl font-bold">Supervisor Dashboard</h1>
            </div>
            <Badge variant="secondary" className="hidden md:inline-flex">
              Head of Department CSE
            </Badge>
          </div>
          
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon">
              <Bell className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon">
              <Settings className="h-5 w-5" />
            </Button>
            <div className="flex items-center gap-3">
              <div className="hidden md:block text-right">
                <p className="text-sm font-medium">Dr. Rajesh Mehta</p>
                <p className="text-xs text-muted-foreground">Head of Department</p>
              </div>
              <div className="h-8 w-8 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-medium">
                RM
              </div>
              <Button variant="ghost" size="icon">
                <LogOut className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="p-6 space-y-6">
        {/* Overview Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Students</CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{overallStats.totalStudents}</div>
              <p className="text-xs text-muted-foreground">
                {overallStats.activeStudents} active this week
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Active Courses</CardTitle>
              <BookOpen className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">12</div>
              <p className="text-xs text-muted-foreground">
                5 technical skill tracks
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Assessments</CardTitle>
              <Award className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{overallStats.completedAssessments}</div>
              <p className="text-xs text-muted-foreground">
                Completed this month
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Avg Progress</CardTitle>
              <TrendingUp className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{overallStats.avgProgress}%</div>
              <p className="text-xs text-muted-foreground">
                +2.1% from last month
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Student Progress Section */}
        <Card>
          <CardHeader>
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div>
                <CardTitle>Student Progress Overview</CardTitle>
                <CardDescription>
                  Track your students' technical skill development and assessment progress
                </CardDescription>
              </div>
              <div className="flex items-center gap-2">
                <Button variant="outline" size="sm">
                  <Download className="h-4 w-4 mr-2" />
                  Export
                </Button>
              </div>
            </div>
            
            {/* Search and Filter */}
            <div className="flex flex-col md:flex-row gap-4 mt-4">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search students by name or roll number..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-9"
                />
              </div>
              <div className="flex gap-2">
                <Select value={filterYear} onValueChange={setFilterYear}>
                  <SelectTrigger className="w-[140px] h-9">
                    <SelectValue placeholder="Year" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Years</SelectItem>
                    <SelectItem value="1st Year">1st Year</SelectItem>
                    <SelectItem value="2nd Year">2nd Year</SelectItem>
                    <SelectItem value="3rd Year">3rd Year</SelectItem>
                    <SelectItem value="4th Year">4th Year</SelectItem>
                  </SelectContent>
                </Select>
                <Button
                  variant={filterStatus === "all" ? "default" : "outline"}
                  size="sm"
                  onClick={() => setFilterStatus("all")}
                >
                  All
                </Button>
                <Button
                  variant={filterStatus === "active" ? "default" : "outline"}
                  size="sm"
                  onClick={() => setFilterStatus("active")}
                >
                  Active
                </Button>
                <Button
                  variant={filterStatus === "warning" ? "default" : "outline"}
                  size="sm"
                  onClick={() => setFilterStatus("warning")}
                >
                  Needs Attention
                </Button>
                <Button
                  variant={filterStatus === "danger" ? "default" : "outline"}
                  size="sm"
                  onClick={() => setFilterStatus("danger")}
                >
                  At Risk
                </Button>
              </div>
            </div>
          </CardHeader>
          
          <CardContent>
            <div className="space-y-4">
              {filteredStudents.map((student) => (
                <div key={student.id} className="border rounded-lg p-6 hover:bg-muted/50 transition-colors">
                  <div className="space-y-4">
                    {/* Student Header */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="h-12 w-12 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-medium text-lg">
                          {student.avatar}
                        </div>
                        <div>
                          <div className="flex items-center gap-2">
                            <h3 className="font-bold text-lg">{student.name}</h3>
                            <Badge className={getStatusColor(student.status)}>
                              {student.status === "active" ? "Active" :
                               student.status === "warning" ? "Needs Attention" : "At Risk"}
                            </Badge>
                          </div>
                          <p className="text-sm text-muted-foreground">
                            {student.rollNo} • {student.year} • {student.department}
                          </p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="text-xs text-muted-foreground">Last active</p>
                        <p className="text-sm font-medium">{student.lastActive}</p>
                      </div>
                    </div>

                    {/* Academic Overview */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-4 bg-muted/30 rounded-lg">
                      <div className="text-center">
                        <div className="flex items-center justify-center gap-1 mb-1">
                          <GraduationCap className="h-4 w-4 text-muted-foreground" />
                          <span className="text-xs font-medium text-muted-foreground">CGPA</span>
                        </div>
                        <div className={`text-lg font-bold ${
                          student.cgpa >= 8.5 ? 'text-success' :
                          student.cgpa >= 7.0 ? 'text-warning' : 'text-destructive'
                        }`}>
                          {student.cgpa}/10
                        </div>
                      </div>
                      <div className="text-center">
                        <div className="flex items-center justify-center gap-1 mb-1">
                          <AlertCircle className="h-4 w-4 text-muted-foreground" />
                          <span className="text-xs font-medium text-muted-foreground">Backlogs</span>
                        </div>
                        <div className={`text-lg font-bold ${
                          student.backlogs === 0 ? 'text-success' :
                          student.backlogs <= 2 ? 'text-warning' : 'text-destructive'
                        }`}>
                          {student.backlogs}
                        </div>
                      </div>
                      <div className="text-center">
                        <div className="flex items-center justify-center gap-1 mb-1">
                          <FileText className="h-4 w-4 text-muted-foreground" />
                          <span className="text-xs font-medium text-muted-foreground">Credits</span>
                        </div>
                        <div className="text-lg font-bold text-info">
                          {student.completedCredits}/{student.totalCredits}
                        </div>
                      </div>
                      <div className="text-center">
                        <div className="flex items-center justify-center gap-1 mb-1">
                          <Briefcase className="h-4 w-4 text-muted-foreground" />
                          <span className="text-xs font-medium text-muted-foreground">Placement</span>
                        </div>
                        <div className={`text-sm font-bold ${
                          student.placementStatus === 'placed' ? 'text-success' :
                          student.placementStatus === 'searching' ? 'text-warning' : 'text-destructive'
                        }`}>
                          {student.placementStatus === 'placed' ? 'Placed' :
                           student.placementStatus === 'searching' ? 'Searching' : 'Not Started'}
                        </div>
                      </div>
                    </div>

                    {/* Placement Details */}
                    <div className="p-4 bg-card border rounded-lg">
                      <h4 className="text-sm font-medium mb-3 flex items-center gap-2">
                        <Building className="h-4 w-4" />
                        Placement Status & Details
                      </h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {/* Placement Status */}
                        <div>
                          <div className="space-y-2">
                            <div className="flex justify-between items-center">
                              <span className="text-xs text-muted-foreground">Status:</span>
                              <Badge className={
                                student.placementStatus === 'placed' ? 'bg-success text-success-foreground' :
                                student.placementStatus === 'searching' ? 'bg-warning text-warning-foreground' :
                                'bg-destructive text-destructive-foreground'
                              }>
                                {student.placementStatus === 'placed' ? 'Placed' :
                                 student.placementStatus === 'searching' ? 'Actively Searching' : 'Not Started'}
                              </Badge>
                            </div>
                            {student.placementDetails && (
                              <>
                                <div className="flex justify-between">
                                  <span className="text-xs text-muted-foreground">Company:</span>
                                  <span className="text-xs font-medium">{student.placementDetails.company}</span>
                                </div>
                                <div className="flex justify-between">
                                  <span className="text-xs text-muted-foreground">Package:</span>
                                  <span className="text-xs font-bold text-success">{student.placementDetails.package}</span>
                                </div>
                                <div className="flex justify-between">
                                  <span className="text-xs text-muted-foreground">Role:</span>
                                  <span className="text-xs font-medium">{student.placementDetails.role}</span>
                                </div>
                              </>
                            )}
                          </div>
                        </div>

                        {/* Application Statistics */}
                        <div>
                          <div className="space-y-2">
                            <div className="text-xs font-medium text-muted-foreground mb-2">Application Stats:</div>
                            <div className="grid grid-cols-2 gap-2 text-xs">
                              <div className="flex justify-between">
                                <span className="text-muted-foreground">Applied:</span>
                                <span className="font-medium">{student.applicationStats.applied}</span>
                              </div>
                              <div className="flex justify-between">
                                <span className="text-muted-foreground">Shortlisted:</span>
                                <span className="font-medium text-info">{student.applicationStats.shortlisted}</span>
                              </div>
                              <div className="flex justify-between">
                                <span className="text-muted-foreground">Interviewed:</span>
                                <span className="font-medium text-warning">{student.applicationStats.interviewed}</span>
                              </div>
                              <div className="flex justify-between">
                                <span className="text-muted-foreground">Offers:</span>
                                <span className="font-bold text-success">{student.applicationStats.offers}</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Technical Skills Progress */}
                    <div>
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-sm font-medium">Technical Skills Progress</span>
                        <span className="text-sm font-bold">{student.overallProgress || 0}%</span>
                      </div>

                      <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
                        {student.skills && Object.entries(student.skills).map(([skill, progress]) => {
                          const Icon = skillIcons[skill as keyof typeof skillIcons];
                          const progressValue = progress || 0;
                          return (
                            <div key={skill} className="text-center p-3 rounded-lg border bg-card hover:bg-muted/50 transition-colors">
                              {Icon && <Icon className="h-5 w-5 mx-auto mb-2 text-muted-foreground" />}
                              <div className="text-xs font-medium truncate mb-1">{skill}</div>
                              <div className={`text-sm font-bold ${
                                progressValue >= 80 ? 'text-success' :
                                progressValue >= 60 ? 'text-warning' : 'text-destructive'
                              }`}>
                                {progressValue}%
                              </div>
                              <Progress value={progressValue} className="h-1 mt-2" />
                            </div>
                          );
                        })}
                      </div>
                    </div>

                    {/* Recent Projects */}
                    <div>
                      <h4 className="text-sm font-medium mb-2 flex items-center gap-2">
                        <Award className="h-4 w-4" />
                        Recent Projects
                      </h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                        {student.projects?.map((project, index) => (
                          <div key={index} className="p-2 rounded border bg-card">
                            <div className="flex justify-between items-start">
                              <div className="flex-1">
                                <div className="text-sm font-medium truncate">{project.name}</div>
                                <div className="text-xs text-muted-foreground">{project.course}</div>
                              </div>
                              <Badge variant="outline" className={`text-xs ${
                                project.grade.startsWith('A') ? 'border-success text-success' :
                                project.grade.startsWith('B') ? 'border-warning text-warning' :
                                'border-destructive text-destructive'
                              }`}>
                                {project.grade}
                              </Badge>
                            </div>
                          </div>
                        )) || (
                          <div className="text-xs text-muted-foreground col-span-2">No projects available</div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {filteredStudents.length === 0 && (
              <div className="text-center py-12">
                <Users className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
                <h3 className="text-lg font-medium mb-2">No students found</h3>
                <p className="text-muted-foreground">
                  Try adjusting your search terms or filters
                </p>
              </div>
            )}
          </CardContent>
        </Card>

        {/* Quick Actions */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="cursor-pointer hover:bg-muted/50 transition-colors">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Award className="h-5 w-5" />
                Create Assessment
              </CardTitle>
              <CardDescription>
                Design new technical skill assessments for your students
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="cursor-pointer hover:bg-muted/50 transition-colors">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Trophy className="h-5 w-5" />
                Create Contest
              </CardTitle>
              <CardDescription>
                Organize coding competitions and skill challenges
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="cursor-pointer hover:bg-muted/50 transition-colors">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BookOpen className="h-5 w-5" />
                Course Management
              </CardTitle>
              <CardDescription>
                Manage courses, curriculum, and learning paths
              </CardDescription>
            </CardHeader>
          </Card>

          <Card
            className="cursor-pointer hover:bg-muted/50 transition-colors"
            onClick={() => navigate("/analytics")}
          >
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <TrendingUp className="h-5 w-5" />
                Analytics
              </CardTitle>
              <CardDescription>
                View detailed reports and analytics on student progress
              </CardDescription>
            </CardHeader>
          </Card>
        </div>
      </main>
    </div>
  );
}
