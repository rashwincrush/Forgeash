# ForgeAsh – Full Site Content Inventory

Generated from React/Wouter app source in `client/src`.

## Routes Overview (from `client/src/App.tsx`)

- `/` → `Home`
- `/work` → `WorkPage`
- `/services` → `WebsitePlansPage` (alias)
- `/services/websites` → `WebsitePlansPage`
- `/services/ai-automation` → `AiAutomationPage`
- `/services/saas-mvp-build` → `SaasMvpBuildPage`
- `/services/data-dashboards` → `DataDashboardsPage`
- `/contact` → `ContactPage`
- `/about` → `AboutPage`
- `*` → `NotFound` (404)

---

## Global Navigation (`Navigation` component)

Location: `client/src/components/navigation.tsx`

### Brand

- Logo image alt: `ForgeAsh Technologies`
- Brand text line 1: `ForgeAsh Technologies`
- Brand text line 2: `AI Solutions & Innovation`

### Desktop nav links

- `Home` → `/`
- `Services` → `/services/websites`
- `Our Work` → `/work`
- Primary CTA button: `Contact Us` → `/contact`

### Mobile nav links (drawer)

- `Home` → `/`
- `Services` → `/services/websites`
- `Our Work` → `/work`
- Primary CTA button: `Contact Us` → `/contact`

---

## Global Footer (`Footer` component)

Location: `client/src/components/footer.tsx`

### Brand & description

- Brand: `ForgeAsh Technologies`
- Tagline: `Websites · AI · SaaS`
- Description paragraph:
  - `Studio partner for founders and teams who want high-performance websites, AI systems, and SaaS products that actually move business metrics.`

### Services links

Section heading: `Services`

Links and labels:

- `High-Performance Websites` → `/services/websites`
- `AI Systems & Automation` → `/services/ai-automation`
- `SaaS MVP Build` → `/services/saas-mvp-build`
- `Data Dashboards & Automation` → `/services/data-dashboards`
- `Our Work` → `/work`
- `About` → `/about`

### Contact details

Section heading: `Contact`

- Location:
  - Icon: `MapPin`
  - Text: `Chennai, Tamil Nadu, India`
- Email:
  - Icon: `Mail`
  - Link: `connect@forgeash.in` → `mailto:connect@forgeash.in`
- Phone:
  - Icon: `Phone`
  - Link text: `+91 63691 26439` → `tel:+916369126439`
- WhatsApp:
  - Icon: `MessageCircle`
  - Link text: `Chat on WhatsApp` → `https://wa.me/916369126439`

### Social icons (no visible labels, hover via aria-label)

- LinkedIn (aria-label: `LinkedIn`) → `#`
- Twitter (aria-label: `Twitter`) → `#`
- GitHub (aria-label: `GitHub`) → `#`

### Bottom bar

- Copyright:
  - `© 2024 ForgeAsh Technologies. All rights reserved.`
- Policy links:
  - `Privacy Policy` → `/privacy`
  - `Terms of Service` → `/terms`
  - `Cookie Policy` → `/cookies`

---

## Home Page (`Home` + sections)

Location: `client/src/pages/home.tsx`

Document title: `ForgeAsh – Websites & AI Solutions`

Sections are composed from:
- `HeroSection`
- `CoreOffersSection`
- `StatisticsSection`
- `BusinessImpactSection`
- `FeaturedServicesSection`
- `ServiceCategoriesSection`
- `IndustryExpertiseSection`
- `CallToActionSection`

### Home – Hero Section (`HeroSection`)

Location: `client/src/components/hero-section.tsx`

#### Subliminal text strings (abundance/prosperity copy)

Rendered as low-opacity overlay text:

- `I attract abundant clients effortlessly`
- `My AI solutions generate massive revenue`
- `Innovation flows through me naturally`
- `I manifest extraordinary business success`
- `My code creates limitless possibilities`
- `Clients are drawn to my expertise`

#### Badge

- `🚀 Websites, AI systems, and SaaS built for real business growth`

#### Main headline

- Line 1–2:
  - `Websites & AI Systems That Grow Your Business Worldwide`

#### Supporting paragraph

- `ForgeAsh designs and builds high-performance websites, AI solutions, and SaaS platforms that turn traffic into customers and manual work into automated workflows.`

#### Primary CTAs

1. Button: `Book a Free Strategy Call`
   - Destination: `BOOKING_URL` (external, from config)
   - On click tracking label: `location: "hero"`, `label: "book_free_strategy_call"`

2. Secondary button: `Explore Our Services`
   - Destination: `/services`
   - On click tracking label: `location: "hero"`, `label: "explore_services"`

#### Trust / social proof chips

Heading:

- `TRUSTED BY INDUSTRY LEADERS`

Icon bullets (no extra visible text beyond icons):
- Star icon
- Award icon
- Trophy icon

#### Orbital logo & industry icons

- Central logo alt: `ForgeAsh Technologies Logo`
- Floating icon metaphors (no captions, just icons):
  - Healthcare cross
  - Finance bars
  - E-commerce bag
  - Education/academy icon
  - Manufacturing/star-like icon
- Currency icons orbiting:
  - Dollar ($)
  - Pound (£)
  - Rupee (₹)

#### Mini stat badges

Top-right badge:
- `10+`
- `Projects`

Bottom-left badge:
- `98%`
- `Satisfaction`

---

### Home – Core Offers Section (`CoreOffersSection`)

Location: `client/src/components/core-offers-section.tsx`

#### Section header

- Pill label: `Productized Services`
- Heading: `Clear offers that move your business forward`
- Body paragraph:
  - `Choose a ready-to-go engagement model that matches where you are today—whether you’re upgrading your website, automating workflows with AI, or launching a new SaaS product.`

#### Offer cards

There are four offers; each card includes:
- Title
- `For:` target audience string
- Description
- Outcomes bullets
- Timeline
- Investment text
- CTAs: `Book Strategy Call` (to `BOOKING_URL`) and `View Details` (to specific service page)

1. **High-Performance Business Websites** (`id: websites`)
   - For: `SMEs, clinics, institutes, coaches, and service businesses`
   - Description:
     - `Modern, conversion-focused websites that load fast, look premium, and turn visitors into qualified enquiries.`
   - Outcomes:
     - `Clear funnels that guide visitors to call, book, or enquire`
     - `Mobile-first experience with strong SEO foundations`
     - `Structured pages for services, testimonials, FAQs, and contact`
   - Timeline:
     - `Typical timeline: 3–6 weeks depending on scope`
   - Investment:
     - `Typical starting investment: project-based, from a few thousand USD`
   - Details link: `/services/websites`

2. **AI Strategy & Implementation** (`id: ai`)
   - For: `Teams that want to automate workflows and make better decisions`
   - Description:
     - `We help you identify high-leverage AI use-cases, then design and implement workflows that reduce manual work.`
   - Outcomes:
     - `Automation of repetitive operations and reporting`
     - `Decision support dashboards powered by your data`
     - `Roadmap from quick wins to long-term AI capabilities`
   - Timeline:
     - `Typical engagement: 4–8 weeks for audit and implementation of first workflows`
   - Investment:
     - `Typical starting investment: scoped discovery + implementation phases`
   - Details link: `/services/ai-automation`

3. **SaaS MVP Build** (`id: saas`)
   - For: `Founders and SMEs launching new products`
   - Description:
     - `Launch a focused, revenue-ready SaaS MVP in weeks, not months, with clean UX and solid technical foundations.`
   - Outcomes:
     - `Core features: auth, dashboards, roles, and basic billing readiness`
     - `Architecture that can grow from MVP to v1 and beyond`
     - `Tight feedback loops so you can ship, learn, and iterate`
   - Timeline:
     - `Typical timeline: 8–12 weeks for a validated MVP`
   - Investment:
     - `Typical starting investment: fixed-scope MVP engagements`
   - Details link: `/services/saas-mvp-build`

4. **Data Dashboards & Automation** (`id: data`)
   - For: `Decision-makers and operations-heavy teams`
   - Description:
     - `Custom dashboards and automations that bring your KPIs, operations, and reporting into one clear view.`
   - Outcomes:
     - `Executive and operations dashboards tailored to your metrics`
     - `Integrations with the tools you already use (CRMs, spreadsheets, ERPs)`
     - `Automated reporting so your team spends less time in spreadsheets`
   - Timeline:
     - `Typical timeline: 3–8 weeks depending on data sources and complexity`
   - Investment:
     - `Typical starting investment: scoped per workflow or dashboard suite`
   - Details link: `/services/data-dashboards`

---

### Home – Statistics Section (`StatisticsSection`)

Location: `client/src/components/statistics-section.tsx`

#### Subliminal texts

- `Success multiplies through my work`
- `I create value that transforms businesses`
- `My solutions generate abundant returns`
- `Excellence flows through every project`

#### Section header

- Heading: `Driving Excellence Through Innovation`
- Body paragraph:
  - `Our proven track record demonstrates consistent delivery of transformative AI solutions that generate measurable business impact across diverse industries.`

#### Stat cards

1. Projects completed
   - Number: `10+`
   - Label: `PROJECTS COMPLETED`
   - Subtext: `Successfully delivered across multiple industries`

2. Client satisfaction
   - Number: `98%`
   - Label: `CLIENT SATISFACTION`
   - Subtext: `Consistently exceeding expectations`

---

### Home – Business Impact Section (`BusinessImpactSection`)

Location: `client/src/components/business-impact-section.tsx`

#### Section header

- Heading: `BUSINESS IMPACT`
- Body:
  - `Our clients consistently achieve significant improvements in key business metrics through our strategic technology implementations and AI-driven solutions.`

#### Metric cards

1. `35%`
   - Title: `Increase Operational Efficiency`
   - Description: `Our clients typically see a 35% improvement in operational efficiency through strategic automation and workflow optimization.`

2. `28%`
   - Title: `Boost Revenue Growth`
   - Description: `Leverage AI-driven insights and optimized customer experiences to achieve an average 28% increase in revenue growth.`

3. `40%`
   - Title: `Reduce Development Time`
   - Description: `Our AI-augmented development approach reduces project timelines by up to 40% compared to traditional methods.`

4. `65%`
   - Title: `Enhance Decision Quality`
   - Description: `Data-driven strategies and predictive analytics improve decision quality by 65%, leading to better business outcomes.`

---

### Home – Featured Services Section (`FeaturedServicesSection`)

Location: `client/src/components/featured-services-section.tsx`

#### Subliminal innovation affirmations

- `My services create extraordinary value`
- `Innovation flows through my solutions`
- `Clients see immediate transformation`
- `My expertise commands premium investment`

#### Section header

- Badge: `✨ Transformative Technology Solutions`
- Heading: `FEATURED SERVICES`
- Body paragraph:
  - `We deliver strategic technology solutions that drive growth, efficiency, and competitive advantage for forward-thinking businesses across diverse industries.`

#### Service cards (3)

Each has: title, description, features (bullets), plus hidden affirmation revealed on hover.

1. **Enterprise AI Implementation**
   - Title: `Enterprise AI Implementation`
   - Description: `Transform your operations with custom AI solutions that automate tasks, generate insights, and drive strategic decision-making.`
   - Features:
     - `Custom AI models tailored to your business needs`
     - `Seamless integration with existing systems`
     - `Ongoing optimization and support`
   - Hidden affirmation: `"My AI solutions multiply profits exponentially"`

2. **SaaS Platform Innovation**
   - Title: `SaaS Platform Innovation`
   - Description: `Create scalable, cloud-based applications that generate recurring revenue and deliver continuous value to your customers.`
   - Features:
     - `Subscription-based business models`
     - `Multi-tenant architecture design`
     - `User-friendly interfaces that drive adoption`
   - Hidden affirmation: `"My SaaS solutions attract unlimited recurring revenue"`

3. **Data Analysis & Visualization**
   - Title: `Data Analysis & Visualization`
   - Description: `Turn complex data into actionable insights with powerful analytics and intuitive visualizations that inform strategic decisions.`
   - Features:
     - `Interactive dashboards that reveal patterns`
     - `Predictive analytics that anticipate trends`
     - `Custom reporting tailored to your KPIs`
   - Hidden affirmation: `"My data insights generate massive wealth opportunities"`

#### Section-level CTA

- Button: `View All Services` (no explicit href in this component)

---

### Home – Service Categories Section (`ServiceCategoriesSection`)

Location: `client/src/components/service-categories-section.tsx`

#### Subliminal prosperity messages

- `I effortlessly attract clients who value my expertise`
- `Success flows naturally to my business`
- `My services create abundant prosperity`
- `I am a powerful magnet for business growth`

#### Section header

- Badge: `WEBSITES, AI & DATA`
- Heading: `FEATURED SERVICES`
- Paragraph:
  - `We design and build conversion-focused websites, AI systems, and data platforms that create real business growth for ambitious teams.`

#### Category cards

1. **High-Performance Business Websites**
   - Description:
     - `Conversion-focused websites for clinics, institutes, coaches, agencies, and service businesses that need to turn visitors into booked calls.`
   - Features:
     - `For: clinics, institutes, coaches, professional services, and growing brands`
     - `What you get: homepage, services, about, work, and contact pages woven into a clear story`
     - `Conversion layer: prominent calls-to-action, booking flow, and lead capture tuned for global buyers`
     - `Foundations: fast load times, mobile-first layouts, and SEO-ready structure`
   - Affirmation: `My website consistently attracts and converts the right clients.`
   - Button on this card:
     - Label: `Learn More`
     - Behavior: navigates to `/services/websites` and tracks event `view_website_plans` with label `learn_more_high_performance_websites`.

2. **AI Systems & Automation**
   - Description:
     - `Design and implement AI workflows that automate repetitive work, improve decisions, and give your team back time for high-value tasks.`
   - Features:
     - `Automation: turn manual, spreadsheet-heavy processes into reliable AI-powered flows`
     - `Decision support: dashboards and models that surface the right insight at the right moment`
     - `Roadmap: from quick-win experiments to stable systems rolled out across your team`
   - Affirmation: `My AI systems multiply efficiency and profitability.`

3. **Dashboards & SaaS Platforms`**
   - Description:
     - `Build data dashboards and SaaS-style platforms that centralize information, streamline operations, and create new revenue.`
   - Features:
     - `Executive and operations dashboards tailored to your actual KPIs`
     - `SaaS-ready foundations: authentication, roles, and core product workflows`
     - `Integration with the tools you already use so data stays in sync`
   - Affirmation: `My platforms reveal exactly what's working and where to grow next.`

---

### Home – Industry Expertise Section (`IndustryExpertiseSection`)

Location: `client/src/components/industry-expertise-section.tsx`

#### Subliminal messages

- `My industry expertise attracts ideal clients`
- `Every industry I serve creates abundant prosperity`
- `I naturally attract business from all industries`
- `My solutions create exponential wealth for clients`

#### Section header & copy

- Composite heading:
  - `INDUSTRY` (gradient text)
  - `EXPERTISE`
- Subheading:
  - `Solutions That Magnetize Success In Every Industry`
- Body paragraph:
  - `We deliver tailored solutions for diverse industries, addressing sector-specific challenges with specialized expertise and innovative approaches.`
- Supporting paragraph:
  - `Our team combines deep industry knowledge with cutting-edge technical capabilities to create solutions that drive meaningful results for your specific business context.`

#### Buttons

- `Explore Industry Solutions`
- `Learn About Our Approach`

#### Industry tiles

Nine tiles arranged in a grid, each shows icon + label:

- `Healthcare`
- `Education`
- `Retail`
- `Financial Services`
- `Manufacturing`
- `Technology`
- `Logistics`
- `Professional Services`
- `And More...`

#### Client Logos Slider (`ClientLogosSlider`)

Each logo has:
- Display name (alt text)
- Tooltip description
- Status label
- External URL

Logos:

1. `Mangalabharathi Trust - MB`
   - Description: `Educational trust fostering rural development.`
   - Link: `https://nalamnco.in/`
   - Status: `Existing Client`

2. `Bezalel Interiors`
   - Description: `Award-winning interior design studio.`
   - Link: `https://bezalelinterior.com/`
   - Status: `Our Work`

3. `Aakrati Interior Studio`
   - Description: `High-end interior studio website crafted for a Bengaluru-based brand.`
   - Link: `https://artkrati.in/`
   - Status: `Our Work`

4. `AMET University`
   - Description: `India's premier maritime university.`
   - Link: `https://www.ametalumni.in/`
   - Status: `Existing Client`

5. `ForgeCircle – Campus-to-Career Hub`
   - Description: `Alumni and campus-to-career platform built for AMET University.`
   - Link: `https://www.ametalumni.in/`
   - Status: `Our Work`

6. `Maersk`
   - Description: `Global leader in shipping and logistics.`
   - Link: `https://konsunenergy.in/`
   - Status: `Our Work`

7. `Route Revolution`
   - Description: `Innovative transport and logistics startup.`
   - Link: `https://routerevolution.in/#home`
   - Status: `Our Work`

---

### Home – Call To Action Section (`CallToActionSection`)

Location: `client/src/components/call-to-action-section.tsx`

#### Subliminal affirmations

- `Clients invest in my vision eagerly`
- `My business attracts unlimited opportunities`
- `Revenue flows to me effortlessly`
- `I manifest profitable partnerships`
- `My expertise commands premium rates`

#### Section header and copy

- Badge text: `TRANSFORM YOUR BUSINESS`
- Main heading:
  - `Ready to Lead with AI Innovation?`
- Body paragraph:
  - `Join industry leaders who've achieved extraordinary growth through our strategic AI implementations and cutting-edge technology solutions. Let's discuss how we can do the same for you.`

#### CTA button

- Label: `Contact Us`
- Destination: `/contact`

---

## About Page (`AboutPage`)

Location: `client/src/pages/about.tsx`

Document title: `About – ForgeAsh`

### Hero section

- Heading: `Building digital systems that actually move the business needle`
- Paragraph:
  - `ForgeAsh partners with ambitious teams worldwide to design and build websites, AI systems, and SaaS products that are fast, clear, and relentlessly focused on business outcomes.`

### Founder story section

Heading: `Founder story`

Paragraphs:

1. `ForgeAsh was started by Ashwin after years of building websites, SaaS products, and AI-powered tools for universities, clinics, service businesses, and founders. The pattern was always the same: teams didn't need more "experiments"—they needed clear systems that convert traffic, surface the right data, and remove manual busywork.`

2. `From alumni platforms like ForgeCircle, to high-converting sites for dental practices, logistics providers, and education brands, the focus has always been the same: performance, clarity, and measurable impact on leads, revenue, or operations.`

Side card heading: `What this means for you`

Bullets:
- `• You work directly with a builder who understands both tech and business.`
- `• Every project starts from your outcomes, not from a stack preference.`
- `• We keep scope focused so you can launch, learn, and iterate quickly.`

### How we work section

Heading: `How we work`

Intro paragraph:
- `A simple, transparent process that lets you see progress early and often.`

Process steps (each as a small card):

1. `1. Discovery Call`
   - `We clarify goals, constraints, and success metrics, and identify the fastest path to impact.`

2. `2. Proposal & Plan`
   - `You receive a focused engagement plan, timeline, and investment range aligned with your priorities.`

3. `3. Build & Iterate`
   - `We design, build, and iterate in tight feedback loops so you see working software early.`

4. `4. Launch`
   - `We handle the technical launch details so your new site or system goes live smoothly.`

### Who we’re a good fit for

Heading: `Who we're a good fit for`

Paragraph:
- `ForgeAsh works best with teams who care about long-term systems, not just one-off launches: founders, marketing leaders, and operators who want a technical partner that stays close to the numbers.`

Two metric cards:

1. `10+ projects`
   - `Websites, SaaS products, and AI implementations shipped for real businesses.`

2. `Industries served`
   - `Education, healthcare, logistics, professional services, alumni networks, and more.`

### Final CTA band

Heading: `Ready to discuss your project?`

Paragraph:
- `Whether you're planning a new website, an AI workflow, or a SaaS MVP, we'll use the first call to understand your goals and share a clear next step.`

Buttons:

1. `Book Strategy Call`
   - Destination: `BOOKING_URL` (external)

2. `Send a Message`
   - Destination: `/contact`

---

## Work Page (`WorkPage`)

Location: `client/src/pages/work.tsx`

### Page hero

- Heading: `Our Work`
- Paragraph:
  - `We partner with ambitious brands to build exceptional digital products and experiences that drive real business results.`

### Category tabs

Tabs labels:
- `Digital Marketing`
- `Website Solutions`
- `Web Applications`

### Project cards content

#### Digital Marketing projects

1. `ForgeCircle - Campus-to-Career Alumni Hub`
   - Category: `Digital Marketing`
   - Description: `We executed a comprehensive digital marketing campaign for AMET University, focusing on SEO, content strategy, and social media engagement to boost online visibility and student enrollment.`
   - Client: `AMET University`
   - Logo: `/images/client-logos/AMET-removebg-preview.png`

2. `Digital Marketing for Maersk`
   - Category: `Digital Marketing`
   - Description: _(empty string in source)_
   - Client: `Maersk`
   - Logo: `/images/client-logos/Maersk-removebg-preview.png`

#### Website Solutions projects

Each card displays title, description, host (derived from URL), and a `Website` chip.

1. `Jay Mahal - Elegant Marriage Hall`
   - Category: `Website Solutions`
   - Description: `A bilingual (English + Tamil) marketing site for an elegant marriage hall in Thoothukudi, with a photography-driven hero, detailed amenities and capacity info, and a WhatsApp-powered booking flow.`
   - Link: `https://jaymahal.in/`

2. `PR Classes - Excellence in CMA Education`
   - Category: `Website Solutions`
   - Description: `An educational platform for aspiring accountants, providing course information, enrollment, and learning resources.`
   - Link: `https://prclasses.in/`

3. `Route Revolution - Your Trusted Route To Success`
   - Category: `Website Solutions`
   - Description: `A modern logistics companion that lets customers and businesses book shipments, track parcels live via Delhivery-powered tracking, and use WhatsApp-first workflows for enquiries and collection centers.`
   - Link: `https://routerevolution.in/#home`

4. `KON Sun Energy Solutions - Solar Power Made Simple`
   - Category: `Website Solutions`
   - Description: `A single-page React marketing site for a Tamil Nadu–based solar brand, combining clear value proposition messaging with section-based storytelling to convert visitors into consultation leads.`
   - Link: `https://konsunenergy.in/`

5. `Tara's Dental & Aesthetic Center`
   - Category: `Website Solutions`
   - Description: `A professional website for a dental clinic, featuring service details, appointment booking, and patient testimonials.`
   - Link: `https://tarasdental.in/`

6. `Nalam & Co - Logistics Services`
   - Category: `Website Solutions`
   - Description: `A comprehensive logistics website offering a range of services from household shifting to corporate logistics.`
   - Link: `https://nalamnco.in/`

7. `Bezalel Interiors | The Art of Elegant Living`
   - Category: `Website Solutions`
   - Description: `An elegant portfolio website for an interior design firm, showcasing their projects and design philosophy.`
   - Link: `https://bezalelinterior.com/`

#### Web Applications project

1. `ForgeCircle — Campus-to-Career Alumni Hub`
   - Category: `Web Applications`
   - Description: `ForgeCircle connects students with alumni mentors and career opportunities. Join our campus-to-career alumni network today.`
   - Client: `AMET University`
   - Client logo: `/images/client-logos/AMET-removebg-preview.png`
   - Link: `https://www.ametalumni.in/`

---

## Website Plans Page (`WebsitePlansPage`)

Location: `client/src/pages/website-plans.tsx`

Document title: `Website Packages – ForgeAsh`

### Hero / intro section

- Small label: `Web Development Plans`
- Main heading: `High-Performance Business Websites`
- Intro paragraph:
  - `Choose the package that matches where you are today. All plans include a custom design aligned to your brand, clear conversion paths, and performance-focused implementation.`

### Packages

1. **Basic Package**
   - Price line: `Starts from ₹ 12,000`
   - Features list:
     - `Up to 5 pages`
     - `WhatsApp click-to-chat button`
     - `One enquiry form`
     - `Basic SEO`
     - `Mobile responsive`
     - `Basic gallery`
     - `Hosting free for 1st year`
   - Note: `Delivery in 4 hours*`

2. **Advanced Package**
   - Price line: `Starts from ₹ 20,000`
   - Features list:
     - `Up to 12 pages`
     - `WhatsApp click-to-chat button`
     - `Multiple enquiry forms`
     - `On-page SEO + Schema`
     - `Basic chatbot`
     - `Image optimization`
     - `Upload & optimize up to 6 client videos`
     - `One month support`
   - Note: `Delivery in 4 days`

3. **Premium Package**
   - Price line: `Starts from ₹ 40,000`
   - Features list:
     - `Up to 50 pages`
     - `WhatsApp Business/API chat button`
     - `Advanced forms & workflows`
     - `Advanced SEO & AI chatbot`
     - `Upload & optimize up to 15 client videos`
     - `Content Management System with social media integration`
     - `Three month support`
   - Note: `Delivery in 2 weeks`

### Footnote

- `*Post content submission and approvals. GST extra. Domain and hosting costs are separate. WhatsApp BSP fees, if applicable, are billed by the provider.`

### Recent Website Implementations

Section badge: `Recent Website Implementations`

Heading: `Sites We've Launched With These Foundations`

Body paragraph:
- `A small sample of live websites built on ForgeAsh foundations—fast, clear, and tuned for real-world enquiries and bookings.`

Cards (mapped from `liveWebsites` array):

1. `Route Revolution – Courier & Tracking Platform`
   - Bullets:
     - `Smart shipping companion for Indian businesses and customers, with flows for business clients, collection centers, and individual shipments`
     - `Delhivery-powered live tracking views so every parcel update is visible in real time`
     - `WhatsApp-first enquiry and booking flows so pickups, queries, and updates land straight in your phone`

2. `Aakrati Interior Studio – Bengaluru`
   - Bullets:
     - `High-end interior studio website migrated to clean, fast static HTML for improved speed and reliability`
     - `Preserves the original luxury look and feel while significantly reducing hosting and maintenance costs`
     - `Ideal reference for brands that want a premium aesthetic without heavyweight infrastructure`

3. `Jay Mahal – Elegant Marriage Hall`
   - Bullets:
     - `Bilingual (English + Tamil) marketing site for an elegant marriage hall in Thoothukudi`
     - `Photography-driven hero and sections that highlight capacity, amenities, and events`
     - `WhatsApp-powered booking journey that turns visitors into real event enquiries`

4. `Bezalel Interiors – The Art of Elegant Living`
   - Bullets:
     - `Refined, typography-led portfolio experience for a luxury interiors brand`
     - `Clean single-page React app optimized around project storytelling and visuals`
     - `Branding and copy centered on crafting soulful, elevated everyday living`

5. `KON Sun Energy Solutions – Solar Power Made Simple`
   - Bullets:
     - `Single-page React marketing site for a Tamil Nadu–based solar brand`
     - `Combines hero media, clear value proposition, and section-based storytelling across services, installations, FAQs, and contact`
     - `Built to convert visitors into consultation leads with clear CTAs and contact flows`

Each card also includes the micro-CTA text `View live site` next to an arrow icon.

---

## Contact Page (`ContactPage`)

Location: `client/src/pages/contact.tsx`

### Hero

- Heading: `Contact Us`
- Paragraph:
  - `Have a project in mind or just want to say hello? We'd love to hear from you.`

### Left column – Contact Form (`ContactForm`)

Location: `client/src/components/contact-form.tsx`

- Form heading: `Send a Message`
- Fields (placeholders are user-facing):
  - `Full Name`
  - `Email Address`
  - Select placeholder: `Select a service of interest`
    - Options:
      - `Enterprise AI Implementation`
      - `SaaS Platform Innovation`
      - `Data Analysis & Visualization`
  - Textarea placeholder: `Tell us about your project, goals, and any specific requirements...`
- Submit button: `Submit Inquiry`

### Right column – Contact details

Each with heading + text + link text:

1. Block: Email
   - Heading: `Email`
   - Subheading: `General Inquiries`
   - Link text: `connect@forgeash.in` (mailto)

2. Block: Phone
   - Heading: `Phone`
   - Subheading: `Mon-Fri from 9am to 5pm`
   - Link text: `+91 63691 26439` (tel)

3. Block: WhatsApp
   - Heading: `WhatsApp`
   - Subheading: `Click to chat with us`
   - Link text: `Chat on WhatsApp` (external wa.me link)

4. Block: Office
   - Heading: `Office`
   - Subheading: `Registered Office`
   - Text: `Chennai, Tamil Nadu`

---

## AI Automation Page (`AiAutomationPage`)

Location: `client/src/pages/ai-automation.tsx`

Document title: `AI Systems & Automation – ForgeAsh`

### Hero section

Badge:
- `Trusted by 200+ Businesses Globally`

Main heading:
- `Transform Your Business with AI Automation`

Body copy:
- `Save 40+ hours per week, reduce costs by 60%, and scale your operations without increasing headcount. Our AI systems work 24/7 so your team can focus on what matters.`

Trust indicators:
- `SOC 2 Compliant`
- `4.9/5 Rating`
- `10,000+ Workflows`

Hero CTAs:
- Primary: `Contact Us` → `/contact`
- Secondary: `See Results` → `#case-studies`

Guarantee line:
- `✓ No credit card required  ✓ 30-day money-back guarantee`

### Hero-side dashboard copy

Card heading & subtitle:
- `Live Dashboard`
- `Real-Time Insights`

Metrics:
- `Time Saved`
  - Counter text example: `42hrs` (animated)
  - Subtext: `↑ 23% this week`
- `Cost Reduced`
  - Counter: `60%`
  - Subtext: `↑ 15% this month`

Workflow status list label:
- `Active Workflows`
- Status chip: `Running`
- Items:
  - `Invoice Processing`
  - `Lead Qualification`
  - `Report Generation`

Floating badge:
- `Processing Speed`
- `10x Faster`

### Benefits bar

Benefit cards:

1. `Save 40+ Hours/Month`
   - `Automate repetitive tasks`
2. `Cut Costs by 60%`
   - `Reduce operational overhead`
3. `3x Productivity`
   - `Scale without hiring`
4. `99.9% Accuracy`
   - `Eliminate human errors`

### Problem vs Solution section

Heading: `Stop Wasting Time on Repetitive Tasks`

Body:
- `Your team shouldn't be drowning in busywork. Let AI handle the routine so they can focus on growth.`

Without AI (problems):
- `Team spending 40+ hours/week on data entry`
- `Decisions delayed by scattered information`
- `Errors costing thousands in rework`
- `No time for strategic initiatives`
- `Scaling requires expensive hiring`
- `Reports created manually every month`

With AI Systems (solutions):
- `Zero manual data entry - 100% automated`
- `Real-time dashboards for instant insights`
- `99.9% accuracy eliminates costly errors`
- `Team freed up for high-value work`
- `Scale 10x without adding headcount`
- `Automated reports delivered daily`

### Industries Served strip

Label: `TRUSTED ACROSS INDUSTRIES`

Pills:
- `Healthcare`
- `Education`
- `Logistics`
- `Finance`
- `E-commerce`
- `Manufacturing`

### AI Solutions grid

Heading: `Powerful AI Solutions for Every Department`

Body:
- `From operations to sales, we build custom AI systems that integrate seamlessly with your existing tools.`

Cards:

1. `Business Process Automation`
   - Badge: `Most Popular`
   - Features:
     - `Auto-update records across systems`
     - `Generate reports instantly`
     - `Smart routing & approvals`
     - `Event-driven workflows`

2. `AI Assistants for Teams`
   - Badge: `Fastest ROI`
   - Features:
     - `Sales assistant for CRM`
     - `HR assistant for recruiting`
     - `Finance assistant for reporting`
     - `Support assistant for tickets`

3. `Document Intelligence`
   - Features:
     - `Extract data from PDFs`
     - `Process invoices automatically`
     - `Validate & structure data`
     - `Searchable repositories`

4. `Predictive Analytics`
   - Features:
     - `Forecast sales & revenue`
     - `Identify bottlenecks early`
     - `Detect anomalies instantly`
     - `Recommend next actions`

5. `Operations & Logistics`
   - Features:
     - `Auto-route deliveries`
     - `Track SLA compliance`
     - `Smart scheduling`
     - `Vendor automation`

6. `Industry-Specific AI`
   - Features:
     - `Healthcare: Patient workflows`
     - `Education: Performance tracking`
     - `Finance: Expense automation`
     - `Custom solutions available`

### Case Studies section

Heading: `Real Results from Real Businesses`

Intro:
- `See how companies like yours transformed their operations with AI automation.`

Case cards:

1. `Global Logistics Co.` (Industry: Logistics)
   - Result: `4 hours saved daily`
   - Metric: `95% on-time delivery`
   - Story: `Automated route planning across 5 cities eliminated manual scheduling and improved delivery performance.`

2. `Premier Dental Clinic` (Industry: Healthcare)
   - Result: `30% revenue increase`
   - Metric: `85% follow-up rate`
   - Story: `Automated appointment reminders and billing workflows transformed patient engagement and cash flow.`

3. `Tech University` (Industry: Education)
   - Result: `20 hours saved weekly`
   - Metric: `40% early intervention`
   - Story: `Real-time performance dashboards identified at-risk students early, improving retention rates.`

### Process section

Heading: `Your Journey to AI-Powered Success`

Subheading:
- `Simple, proven process from discovery to deployment in 4-8 weeks`

Steps:
1. `01` – `Discovery Call`
   - `We map your workflows and identify high-impact automation opportunities`
2. `02` – `Custom Strategy`
   - `Receive a detailed roadmap with ROI projections and timeline`
3. `03` – `Build & Deploy`
   - `We build, test, and integrate AI systems with your existing tools`
4. `04` – `Scale & Optimize`
   - `Ongoing support to maximize results and add new capabilities`

### FAQ section

Heading: `Frequently Asked Questions`

FAQs:
1. Q: `How long does implementation take?`
   - A: `Most projects are live in 4-8 weeks depending on complexity. Simple automations can be deployed in 2-3 weeks.`
2. Q: `Will this work with our existing tools?`
   - A: `Yes! We integrate with 100+ platforms including Salesforce, SAP, QuickBooks, Google Workspace, and custom systems.`
3. Q: `What if we don't have technical staff?`
   - A: `No problem. We handle everything from setup to training. Your team just needs to use the systems—no coding required.`
4. Q: `What's the typical ROI?`
   - A: `Most clients see 5-10x ROI within 6 months through time savings, error reduction, and operational efficiency gains.`
5. Q: `Do you provide ongoing support?`
   - A: `Yes. All packages include post-launch support, and we offer maintenance plans for continuous optimization.`

### Final CTA section

Heading: `Ready to Transform Your Business?`

Body:
- `Join 200+ companies that eliminated busywork and scaled faster with AI automation. Book your free strategy call today.`

Buttons:
- `Book Free Strategy Call` → `/contact`
- `View Case Studies` → `#case-studies`

Trust bar text:
- `TRUSTED BY LEADING COMPANIES`

Trust bar industry chips:
- `Healthcare`, `Education`, `Logistics`, `Finance`, `Manufacturing`, `E-commerce`

---

## SaaS MVP Build Page (`SaasMvpBuildPage`)

Location: `client/src/pages/saas-mvp-build.tsx`

Document title: `SaaS MVP Build – ForgeAsh`

### Hero section

Badge:
- `For founders & SMEs launching new products`

Main heading:
- `Launch a Revenue-Ready SaaS MVP in 8–12 Weeks`

Body paragraph:
- `We partner with founders and growing businesses to design, build, and launch focused SaaS products with clean UX, robust foundations, and everything you need to start charging real customers.`

Bullets (hero list):
- `• Core features: auth, dashboards, user roles, basic billing readiness`
- `• Architecture that can scale from MVP to v1 and beyond`
- `• Tight feedback loops so you can ship, learn, and iterate`
- `• Typical timeline: 8–12 weeks for a validated MVP`
- `• Typical starting investment: fixed-scope SaaS MVP engagements`

Hero CTAs:

1. `Book SaaS MVP Strategy Call` → `BOOKING_URL`
2. `Download Sample MVP Scope` → `#included`

Note text:
- `No obligation. We'll map a realistic MVP and next steps. You decide if you want to move forward.`

### Hero-side dashboard copy

Heading/subtitle:
- `Sample SaaS MVP Dashboard`
- `Founders see this on day one`

Key stats:
- `Time to first usable version`
  - `6–8 weeks`
  - `From idea to internal pilot`
- `Core modules shipped`
  - `3–5`
  - `Laser-focused on MVP value`

List label:
- `Typical MVP scope includes`

Bullets:
- `• Authentication & onboarding`
- `• Owner/admin/user roles & permissions`
- `• Core dashboard + 2–3 primary flows`
- `• Settings & basic admin tools`

### "Is This SaaS MVP Build For You?" section

Heading: `Is This SaaS MVP Build For You?`

Intro:
- `This engagement is designed for founders and teams who want to launch something real, quickly—without burning a year on a bloated v1.`

Bullets:
- `• First-time founders who want to launch quickly without burning cash on a huge build`
- `• SMEs turning internal tools or spreadsheets into a real product`
- `• Agencies or consultants converting their services into a SaaS platform`
- `• Existing businesses spinning off a new product or vertical`

Side card heading: `You're in the right place if…`

Bullets:
- `• You have a solid idea and a rough workflow in mind`
- `• You don't want to waste 6–12 months building the wrong thing`
- `• You want something you can actually demo, sell, and charge for`

### Problem vs Approach

Left card heading: `The Problem With Most SaaS Builds`

Bullets:
- `• Endless "feature wishlist" that never ships`
- `• Over-engineered architecture from day one`
- `• No real users by the time the budget runs out`
- `• Clunky UX that confuses prospects and buyers`
- `• Poor foundations: no clear roles, no analytics, messy code`

Right card heading: `The SaaS MVP Build Approach`

Bullets:
- `• Laser-focused scope: only what's needed to prove value and charge`
- `• Clean UX & onboarding so users understand the product in minutes`
- `• Solid core: auth, roles, dashboards, basic billing readiness built-in`
- `• Tight loops: ship fast, gather feedback, iterate intentionally`

### SaaS MVP Use Cases section

Heading: `SaaS MVP Use Cases We Build`

Intro:
- `Whether you're productizing an internal tool or launching a brand new SaaS, we help you design and ship a focused MVP you can put in front of real customers.`

Use case cards:

1. `Internal Tool → SaaS Product`
   - Paragraph: `Turn an internal spreadsheet or workflow into a revenue-generating product:`
   - Bullets:
     - `• Customer or partner portals`
     - `• Ops dashboards (logistics, inventory, workflow management)`
     - `• Reporting tools wrapped as SaaS`

2. `Niche Vertical SaaS`
   - Paragraph: `Specialized products in focused markets:`
   - Bullets:
     - `• Clinics: appointments, EMR-lite, billing overview`
     - `• Coaching/education: student dashboards, analytics`
     - `• Logistics: shipment tracking, route overview`
     - `• Agencies: client portals, reporting, approvals`

3. `Membership & Subscription Platforms`
   - Bullets:
     - `• Course/membership dashboards`
     - `• Community portals`
     - `• Content libraries with paid tiers`
     - `• Client access areas with different permissions`

4. `Analytics & Dashboard Products`
   - Paragraph: `Connect existing data sources and offer:`
   - Bullets:
     - `• KPI dashboards`
     - `• Revenue/expense overview`
     - `• Performance analytics`
     - `• Alerts & basic recommendations`

5. `Marketplace / Multi-Party MVPs`
   - Bullets:
     - `• Simple two-sided marketplaces`
     - `• Listings, inquiries, and bookings`
     - `• Basic payment readiness`
     - `• Admin controls for moderation`

### "What's Included" section

Heading: `What's Included in a SaaS MVP Build`

Subsections:

1. `Product Strategy & Scope Definition`
   - Bullets:
     - `• Clarify the core user journey (first 5–10 key actions)`
     - `• Define MVP feature set vs later roadmap`
     - `• Map user roles: admin, owner, team member, customer`
     - `• Prioritize activation so users see value fast`

2. `UX & UI Design`
   - Bullets:
     - `• Clickable prototype of core flows`
     - `• Clean, responsive layout for desktop + mobile`
     - `• Simple onboarding (sign-up → guided first steps)`
     - `• Thoughtful empty states, error states, and messages`

3. `Core SaaS Foundations`
   - Bullets:
     - `• Authentication & onboarding (email + password, reset)`
     - `• Roles & permissions (owner/admin/user separation)`
     - `• Core dashboard with key metrics/actions`
     - `• Settings area for profile, team, and basic config`

4. `Data Model & Architecture`
   - Bullets:
     - `• Schema design for main entities (users, accounts, projects, etc.)`
     - `• Structure that can grow from MVP to v1 without rewrites`
     - `• API structure that can later power mobile apps and integrations`

5. `Billing Readiness`
   - Bullets:
     - `• Plan/tier & feature-flag support in the data model`
     - `• Trial vs paid status tracking`
     - `• Usage metrics hooks (so you can price by usage later)`
     - `• UI support for upgrade prompts and plan limits`

6. `Admin, Analytics & Feedback`
   - Bullets:
     - `• Admin dashboard for users/accounts and usage`
     - `• Manual overrides (suspend/reactivate users, etc.)`
     - `• Key event tracking (logins, activations, drop-offs)`
     - `• Built-in "Send feedback" / "Report an issue" hooks`

### Workflow timeline section

Heading: `From Idea to Live MVP – How We Work`

Timeline columns:

- `Weeks 1–2: Strategy & UX`
  - `• MVP planning workshop`
  - `• Use-case mapping & user roles`
  - `• Wireframes & click-through prototype`
  - `• Finalized MVP scope & success criteria`

- `Weeks 3–6: Build Core Product`
  - `• Implement auth, roles, core entities`
  - `• Primary dashboards and key flows`
  - `• Settings and basics of admin panel`
  - `• Early test deploy for internal usage`

- `Weeks 7–8: Polish & Prepare`
  - `• UX refinements & UI polish`
  - `• Basic analytics & tracking added`
  - `• Bug fixing & performance checks`
  - `• Documentation + quickstart guide`

- `Weeks 9–12: Live Iteration (Optional)`
  - `• Onboard first real users`
  - `• Collect feedback inside the product`
  - `• Implement 1–2 high-impact improvements`
  - `• Prepare v1 roadmap and next steps`

### Pricing & engagement models section

Heading: `How We Structure SaaS MVP Engagements`

Intro:
- `We keep pricing simple and transparent. You get a clear scope, timeline, and ownership of your product.`

Models:

1. `Fixed-Scope MVP`
   - `Best for founders with a clear idea and defined scope.`
   - Bullets:
     - `• Fixed set of features agreed at the start`
     - `• Clear timeline (usually 8–12 weeks)`
     - `• Ideal when you want predictability and a launch deadline`

2. `Guided Build with Iteration`
   - `Best for early-stage ideas that might evolve.`
   - Bullets:
     - `• Core MVP defined early`
     - `• Space for 1–2 iteration cycles based on early user feedback`
     - `• Flexible scope within a fixed time window`

3. `Post-MVP Support`
   - `Optional retainer to keep improving after launch.`
   - Bullets:
     - `• Ongoing improvements & feature tweaks`
     - `• Bug fixes and maintenance`
     - `• Technical guidance for your product team`

### Sample SaaS MVP Outcomes section

Heading: `Sample SaaS MVP Outcomes`

Intro:
- `These are modeled examples based on typical SaaS MVP patterns. Exact results depend on your market, product, and execution.`

Example cards:

1. `Niche Clinic SaaS`
   - Subtitle: `Example 1 · Clinic SaaS`
   - Description: `MVP: appointment scheduling, basic EMR-like notes, revenue dashboard.`
   - Outcome: `live with 3 pilot clinics in ~10 weeks, giving the founder real usage data and case studies.`

2. `Training & Coaching Platform`
   - Subtitle: `Example 2 · Coaching Platform`
   - Description: `MVP: student dashboards, content modules, assignment tracking.`
   - Outcome: `first paying cohort onboarded using the platform instead of scattered tools.`

3. `Logistics Dashboard SaaS`
   - Subtitle: `Example 3 · Logistics SaaS`
   - Description: `MVP: shipment status board, driver app integration, basic reporting.`
   - Outcome: `team able to demo to prospects and onboard first paying customers.`

### Why ForgeAsh section

Heading: `Why Work With ForgeAsh for SaaS MVP`

Body:
- `We've built complex web applications with multi-role access, dashboards, and workflows—including alumni platforms and internal tools that behave like SaaS products.`

Bullets:
- `• Experience designing roles, permissions, dashboards, and operations workflows`
- `• Focus on clean UX and performance, not just "code that works"`
- `• India-based boutique studio serving global clients with high-care engagements`
- `• We ship, we don't overcomplicate the stack or the scope`
- `• We think about v1 and scale from day one`
- `• We're honest about what fits in an MVP vs later phases`

### Final CTA section

Heading: `Ready to Launch Your SaaS MVP?`

Body:
- `Share your idea, and we'll map an MVP that can be launched in weeks, not months. You get clarity on scope, timelines, and what it takes to ship.`

Buttons:

1. `Book SaaS MVP Strategy Call` → `BOOKING_URL`
2. `Send My SaaS Idea for Review` → `/contact`

Footer note:
- `No obligation, just clarity. You keep all ideas and materials. We only propose work we can confidently deliver.`

---

## Data Dashboards Page (`DataDashboardsPage`)

Location: `client/src/pages/data-dashboards.tsx`

Document title: `Data Dashboards & Automation – ForgeAsh`

### Hero section

Badge:
- `For decision-makers & operations-heavy teams`

Heading:
- `Your Entire Business in One Clear, Real-Time Dashboard`

Body paragraph:
- `We build custom dashboards and automated reporting systems that give leadership and operations teams the visibility they need to move faster, make smarter decisions, and eliminate spreadsheet chaos.`

Hero bullet list:
- `• Executive dashboards tailored to your KPIs`
- `• Operations dashboards that reveal bottlenecks instantly`
- `• Integrations with your existing systems`
- `• Automated reporting that saves hours every week`
- `• Typical timeline: 3–8 weeks depending on data sources`
- `• Typical starting investment: scoped per dashboard suite`

CTAs:

1. `Book Dashboard Strategy Call` → `BOOKING_URL`
2. `View Sample Dashboards` → `#dashboard-types`

### Hero visual copy

Heading/subtitle:
- `Executive Snapshot`
- `Today's Performance`

Metric cards:
- `Revenue (MTD)` – `+18%`
- `On-time Delivery` – `96%`
- `SLA Breaches` – `↓ 35%`

Helper text:
- `Your team sees:`
- Bullets:
  - `• Revenue, operations, and customer metrics on one screen`
  - `• Red/green indicators for KPIs that need attention`
  - `• Alerts when numbers cross thresholds`

### Who this is for section

Heading: `Perfect For Teams Who Need Clarity, Speed, and Control`

Body:
- `This offering is built for leadership and operations teams who are done with spreadsheet chaos and want a clear view of the business.`

Bullets:
- `• Founders & CEOs who need a single source of truth`
- `• Operations teams juggling too many trackers, spreadsheets, and reports`
- `• Sales & marketing leaders who need real-time performance data`
- `• Finance teams tired of manual report prep`
- `• Institutions (schools, clinics, logistics firms) with high operational volume`

Side card heading: `You're in the right place if…`

Bullets:
- `• You want fewer spreadsheets`
- `• You want faster decisions`
- `• You want dashboards your team actually uses`
- `• You want visibility without manual effort`

### Problem vs Solution section

Left card heading: `The Real Problem Most Businesses Face`

Bullets:
- `• Data scattered across multiple tools`
- `• Weekly or monthly reports manually stitched together`
- `• No real-time visibility into performance`
- `• Leaders making decisions too late`
- `• Teams drowning in Excel and multiple trackers`
- `• No consistent KPI definitions`

Right card heading: `What We Deliver Instead`

Bullets:
- `• Centralized dashboards, live and always accurate`
- `• Automated reporting (daily/weekly/monthly)`
- `• Custom KPIs built for your business`
- `• Zero manual effort for your team`
- `• A system that works even when workloads explode`
- `• A clear view of operations, finances, customers, and performance`

### Dashboard Types We Build

Heading: `Dashboard Types We Build`

Intro:
- `From executive snapshots to deep operations boards, we design dashboards that match how your team thinks and works.`

Card titles and bullet items:

1. `Executive Dashboards`
   - `• Revenue & growth`
   - `• Top KPIs`
   - `• Priority alerts`
   - `• Performance vs targets`
   - `• Forecasted trends`

2. `Operations Dashboards`
   - `• Workflow status & WIP`
   - `• Bottleneck identification`
   - `• SLA tracking`
   - `• Process throughput`
   - `• Team-level performance`

3. `Sales & Marketing Dashboards`
   - `• Sales pipeline`
   - `• Lead sources`
   - `• Campaign performance`
   - `• Conversion rates`
   - `• Rep performance`

4. `Finance & Accounting Dashboards`
   - `• Expense tracking`
   - `• Cash flow overview`
   - `• P&L summaries`
   - `• Vendor analytics`
   - `• Outstanding payments`

5. `Logistics & Supply Chain Dashboards`
   - `• Shipment statuses`
   - `• Route analytics`
   - `• Delay predictions`
   - `• Fulfillment performance`
   - `• Vendor SLAs`

6. `Education / Institution Dashboards`
   - `• Student performance analytics`
   - `• Attendance & engagement metrics`
   - `• Faculty reporting`
   - `• Placement / alumni analytics`
   - `• Fee collection dashboards`

### Automations You Can Add

Heading: `Automations You Can Add`

Intro:
- `Dashboards are powerful. Dashboards + automation are transformative. These can be sold separately or as add-ons.`

Cards:

1. `Reporting Automation`
   - `• Daily/weekly/monthly auto-generated reports`
   - `• PDFs or dashboards auto-sent to decision makers`
   - `• Automated alerts for critical KPI drops/spikes`

2. `Data Preparation Automation`
   - `• Auto-cleaning messy spreadsheets`
   - `• Harmonizing inconsistent data across sources`
   - `• Normalizing formats and auto-tagging`

3. `Workflow Automation`
   - `• Trigger workflows when metrics hit thresholds`
   - `• Auto-update records across systems`
   - `• Notify teams of anomalies and follow-up actions`

### "What's Included in Every Dashboard Engagement" section

Heading: `What's Included in Every Dashboard Engagement`

Subcards:

1. `KPI Mapping Session`
   - `• Define the 5–20 metrics that matter most`
   - `• Identify data sources`
   - `• Create a unified KPI dictionary`

2. `Data Architecture`
   - `• Design clean data models`
   - `• Map relationships & transformations`
   - `• Set up consistent refresh cycles`

3. `Dashboard UX & UI`
   - `• Minimal, executive-friendly UX`
   - `• Mobile-responsive views`
   - `• Filters, drill-downs, and highlights`
   - `• Clarity-focused layouts`

4. `Integrations`
   - `• CRM & sales tools`
   - `• Spreadsheets / CSV systems`
   - `• ERP, inventory, or POS`
   - `• Finance tools & HR/attendance systems`
   - `• Cloud apps & API-based systems`

5. `Automated Reporting`
   - `• Scheduled email reports`
   - `• Visual summaries & action alerts`
   - `• Weekly KPI rollups`
   - `• Insights pulled directly from dashboards`

6. `Training & Handover`
   - `• 1–3 short training sessions`
   - `• Easy-to-use documentation`
   - `• Team onboarding (optional)`
   - `• 30–60 days of support`

### Example Dashboard Flows

Heading: `Example Dashboard Flows`

Flows:

1. `CEO Snapshot`
   - `• Revenue & expenses`
   - `• Top KPIs`
   - `• Red/Green indicators`
   - `• Forecast for next 30/90 days`

2. `Operations Command Center`
   - `• Task queues & status overview`
   - `• SLA breaches & exceptions`
   - `• Team workload`
   - `• Process bottlenecks`

3. `Marketing Performance Board`
   - `• Lead sources & CAC estimates`
   - `• ROAS / CTR / Conversion rates`
   - `• Live campaign performance`

4. `Finance Control Tower`
   - `• Cash flow`
   - `• Accounts receivable/payable`
   - `• Monthly P&L`
   - `• Vendor performance`

### Timeline section

Heading: `Typical Timeline: 3–8 Weeks`

Columns:
- `Week 1`
  - `• KPI mapping`
  - `• Data source audit`
  - `• Early wireframes`
- `Weeks 2–4`
  - `• Data modeling & connectors`
  - `• Dashboard design`
  - `• First working prototypes`
- `Weeks 5–7`
  - `• Automation layering`
  - `• Alerts & reporting`
  - `• UX polish`
- `Week 8`
  - `• Documentation`
  - `• Team training`
  - `• Go-live`

### Pricing models section

Heading: `Pricing Models`

Intro:
- `Scoping depends on the number of dashboards, complexity of data sources, and the automations you need. Here's how we typically work:`

Models:

1. `Dashboards Only`
   - `• KPI mapping`
   - `• 1–3 dashboards`
   - `• Limited automation`
   - `• Great for leadership teams`

2. `Dashboards + Automations`
   - `• Multiple dashboards`
   - `• Automated reports & triggers`
   - `• Ideal for operations-heavy teams`

3. `Full Visibility Suite`
   - `• End-to-end dashboards`
   - `• Extensive automations`
   - `• Team training`
   - `• Monthly analytics support`

### Mini Case Studies

Heading: `Mini Case Studies`

Cards:

1. `Logistics Firm`
   - `Built delivery & delay dashboard with route analytics and auto-generated summaries.`
   - `Ops team saved ~20 hours/week and could see bottlenecks in real time.`

2. `Clinic Chain`
   - `Patient volume analytics and doctor utilization dashboards across multiple locations.`
   - `Management finally got a clear view of performance without manual reports.`

3. `Education Institution`
   - `Student performance dashboards with attendance automation and faculty reporting.`
   - `Reporting was simplified drastically, freeing faculty time.`

### Why Teams Choose ForgeAsh

Heading: `Why Teams Choose ForgeAsh`

Bullets:
- `• Deep understanding of operations workflows`
- `• Strong experience with data-heavy applications`
- `• Ability to integrate with complex systems`
- `• Clear, fast UX built for speed and clarity`
- `• Boutique, high-service delivery model`
- `• India-based, globally aligned`

### Final CTA section

Heading: `Ready to See Your Entire Business Clearly?`

Body:
- `Book a call and we'll map the dashboards and automations that will save your team time and accelerate your decisions.`

Buttons:
- `Book Dashboard Strategy Call` → `BOOKING_URL`
- `Share My KPIs & Requirements` → `/contact`

---

## 404 Page (`NotFound`)

Location: `client/src/pages/not-found.tsx`

Content:

- Heading: `404 Page Not Found`
- Paragraph: `Did you forget to add the page to the router?`

---

## Notes

- Policy links (`/privacy`, `/terms`, `/cookies`) are referenced in the footer but corresponding pages are not included in the current `client/src/pages` directory.
- All subliminal "prosperity" and "abundance" text snippets used across sections have been included explicitly above.
