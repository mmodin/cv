export const profile = {
  name: "Mathias Modin",
  role: "Lead Data Engineer & Infrastructure Manager",
  location: "Hamburg, Germany",
  summary:
    "Lead Data Engineer and Infrastructure Manager responsible for the architecture, delivery, and operation of production data systems. I design AWS-based data platforms with real-time replication, streaming ingestion, orchestration, fault-tolerant ETL, infrastructure-as-code, and operational monitoring across analytical and transactional systems.",
  email: "mathias.concha@gmail.com",
  phone: "+49 173 428 24 28",
  website: "https://mmodin.com",
  links: [
    { label: "GitHub", href: "https://github.com/mmodin" },
    { label: "Website", href: "https://mmodin.com" },
  ],
};

export const highlights = [
  "Own data architecture and platform design across AWS infrastructure, streaming ingestion, orchestration, ETL, monitoring, and database operations.",
  "Build idempotent, fault-tolerant pipelines using AWS DMS, Kinesis, Firehose, Lambda, Fargate, Step Functions, Glue, EMR, Spark, and Apache Iceberg.",
  "Lead data engineering and DBA delivery across MongoDB Atlas, DynamoDB, PostgreSQL, MySQL, Redshift, Elasticsearch, and cloud-native analytical systems.",
];

export const experience = [
  {
    company: "Kushki",
    role: "Lead Data Engineer & Infrastructure Manager",
    location: "Remote / Latin America",
    period: "2021 - Present",
    achievements: [
      "Lead architecture and operation of Kushki's AWS data platform, including networking, real-time replication, streaming ingestion, orchestration, ETL, data lake storage, and monitoring.",
      "Design data systems and platform patterns across analytical and operational domains, aligning ingestion, storage, transformation, serving, access control, and reliability requirements.",
      "Build idempotent and fault-tolerant data pipelines using AWS DMS, Kinesis, Firehose, Lambda, Fargate, Step Functions, Glue, EMR, Spark, and Apache Iceberg.",
      "Automate platform infrastructure and deployments with AWS CDK, Python, CI/CD pipelines, and reusable infrastructure-as-code components.",
      "Operate production analytical and transactional systems across MongoDB Atlas, DynamoDB, PostgreSQL, MySQL, Redshift, Elasticsearch, and Iceberg.",
      "Implement reliability patterns including automated alerting, queue-based monitoring, DLQ handling, replay workflows, and failure recovery.",
      "Develop MongoDB Atlas stream processing, triggers, and App Services integrations for near-real-time operational data workflows.",
      "Manage data engineers and DBAs responsible for platform delivery, database lifecycle management, production support, and data infrastructure reliability.",
    ],
  },
  {
    company: "Worldline",
    role: "Risk Data Scientist",
    location: "Stockholm, Sweden",
    period: "2021",
    achievements: [
      "Led a risk data management project to centralize merchant risk reporting and advanced analytical capabilities on Azure with Power BI as the frontend.",
      "Supported credit risk, fraud risk, and scheme management risk workflows with more consistent reporting and analytical foundations.",
    ],
  },
  {
    company: "Worldline",
    role: "Data Analyst & Data Scientist, Risk & Compliance",
    location: "Stockholm, Sweden",
    period: "2017 - 2021",
    achievements: [
      "Developed and maintained internal BI tools, ETL pipelines, reporting workflows, and database processes across cloud and local environments.",
      "Created KPIs, data mining workflows, and predictive models for risk and compliance teams using R, Python, SQL, Oracle BI, Linux, Oracle, AWS, and Google Cloud.",
    ],
  },
  {
    company: "Deutsche Bundesbank, Stockholm University & Stockholm School of Economics",
    role: "Earlier Analytical Experience",
    location: "Frankfurt am Main / Stockholm",
    period: "2014 - 2016",
    achievements: [
      "Research, teaching, and financial stability roles focused on econometrics, statistics, R/Stata, and firm-level financial data.",
      "Supported financial stability research at Deutsche Bundesbank and taught microeconomics, econometrics, statistics, and R programming at Stockholm University.",
    ],
  },
];

export const projects = [
  {
    name: "Real-Time AWS Data Lake Platform",
    description:
      "Designed an AWS data lake platform combining DMS replication, Kinesis/Firehose streaming, Glue/EMR ETL, Step Functions orchestration, and Apache Iceberg tables.",
    tags: ["AWS", "DMS", "Kinesis", "Glue", "EMR", "Apache Iceberg"],
  },
  {
    name: "Fault-Tolerant Pipeline Operations",
    description:
      "Built queue-based monitoring, alerting, DLQ handling, replay mechanisms, and idempotent processing patterns for production data pipelines.",
    tags: ["Queues", "DLQ", "Monitoring", "Replay", "Idempotency"],
  },
  {
    name: "MongoDB Atlas Operational Integrations",
    description:
      "Implemented Atlas stream processing, triggers, and App Services integrations for near-real-time workflows across operational MongoDB clusters.",
    tags: ["MongoDB Atlas", "Stream Processing", "Triggers", "App Services"],
  },
  {
    name: "Infrastructure-as-Code Data Platform",
    description:
      "Automated deployment of data infrastructure with AWS CDK, Python, CI/CD pipelines, and reusable platform components.",
    tags: ["AWS CDK", "Python", "CI/CD", "Infrastructure as code"],
  },
];

export const education = [
  {
    school: "Stockholm University",
    degree: "Master's studies in Econometrics",
    period: "2014 - 2016",
  },
  {
    school: "Stockholm University",
    degrees: [
      "Bachelor's degree in Economics",
      "Bachelor's degree in Statistics",
    ],
    period: "2011 - 2014",
  },
];

export const skillGroups = [
  {
    label: "AWS data platform",
    items: [
      "AWS CDK",
      "DMS",
      "Kinesis",
      "Firehose",
      "Lambda",
      "Fargate",
      "Step Functions",
      "Glue",
      "EMR",
      "VPC/networking",
    ],
  },
  {
    label: "Data architecture & processing",
    items: [
      "Apache Iceberg",
      "Spark",
      "PySpark",
      "Python",
      "SQL",
      "Streaming ingestion",
      "ETL/ELT",
      "Idempotent pipelines",
      "Fault tolerance",
    ],
  },
  {
    label: "Databases & systems",
    items: [
      "MongoDB Atlas",
      "DynamoDB",
      "PostgreSQL",
      "MySQL",
      "Redshift",
      "Elasticsearch",
      "Database operations",
      "Linux",
    ],
  },
  {
    label: "Leadership & operations",
    items: [
      "Data architecture",
      "Team leadership",
      "Platform architecture",
      "DBA management",
      "Monitoring",
      "Alerting",
      "DLQ handling",
      "Replay workflows",
      "Stakeholder collaboration",
    ],
  },
  {
    label: "Agentic workflows",
    items: ["MCP integrations", "AI-assisted data operations", "Data automation"],
  },
];

export const languages = [
  { language: "Swedish", level: "native" },
  { language: "English", level: "fluent" },
  { language: "Spanish", level: "intermediate" },
  { language: "German", level: "beginner" },
];
