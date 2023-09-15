var express = require('express');
var router = express.Router();

const glosaryList = [

  {"ID" : "ID", "Term" : "Term", "Description" : "Description", "References" : "References"},
  {"ID": "1", "Term" : "Node js", "Description" : "It is a javascript runtime built for server side applications", "References" : "About (no date) Node.js. Available at: https://nodejs.org/en/about (Accessed: 22 July 2023). "},
  {"ID": "2", "Term" : "Express js", "Description" : "minimalist web framework for node js", "References" : "(No date) Express. Available at: https://expressjs.com/ (Accessed: 22 July 2023). "},
  {"ID": "3", "Term" : "Waterfall model", "Description" : "A sequential design process with one stages output as other stages input", "References" : "Lutkevich, B. and Lewis, S. (2022) What is the waterfall model? - definition and guide, Software Quality. Available at: https://www.techtarget.com/searchsoftwarequality/definition/waterfall-model (Accessed: 22 July 2023). "},
  {"ID": "4", "Term" : "DevOps", "Description" : "Collaborative approach unifying software development and IT operations", "References" : "Parker, B. (2021) Get started with devops: Principles, best practices and tips, Xray. Available at: https://www.getxray.app/blog/get-started-with-devops-principles-best-practices-and-tips?source=google&amp;network=g&amp;campaign=%7Bcampaign%7D&amp;adgroup=%7Badgroup%7D&amp;keyword=&amp;placement=&amp;creative=615600538027&amp;utm_medium=cpc&amp;utm_term=&amp;utm_campaign=GG_SEARCH_TOFU%2B%5BXRAY%5D%2B-%2BDSA%2BBlog%2BPosts%2B-%2BAUS%2BNZ&amp;utm_source=adwords&amp;hsa_acc=9970092548&amp;hsa_cam=17990097516&amp;hsa_grp=141627448244&amp;hsa_ad=615600538027&amp;hsa_src=g&amp;hsa_tgt=dsa-1391637226778&amp;hsa_kw=&amp;hsa_mt=&amp;hsa_net=adwords&amp;hsa_ver=3&amp;gad=1&amp;gclid=Cj0KCQjw2eilBhCCARIsAG0Pf8t0TCWVjABOjvdD1vayC4swTlhjXlCA6M7_1yLW37q5aZmhYrP558EaAnX7EALw_wcB (Accessed: 22 July 2023). "},
  {"ID": "5", "Term" : "Wall of Confusion", "Description" : "Communication barrier between development and operations team ", "References" : "https://levelup.gitconnected.com/the-wall-of-confusion-623057a4dd26"},
  {"ID": "6", "Term" : "UI/UX", "Description" : "User interface design meets user experience for optimal usability", "References" : "Lamprecht, E. et al. (2023) UX vs. Ui Design: What’s the difference? [2023 guide], CareerFoundry. Available at: https://careerfoundry.com/en/blog/ux-design/the-difference-between-ux-and-ui-design-a-laymans-guide/?utm_term=difference+between+ux+and+ui&amp;utm_campaign=125898545455&amp;utm_source=google&amp;utm_medium=cpc&amp;utm_content=657533082197&amp;hsa_mt=e&amp;hsa_ad=657533082197&amp;hsa_ver=3&amp;hsa_tgt=kwd-781885580339&amp;hsa_net=adwords&amp;hsa_grp=125898545455&amp;hsa_src=g&amp;hsa_cam=14154399301&amp;hsa_acc=8658759102&amp;hsa_kw=difference+between+ux+and+ui&amp;gclid=Cj0KCQjw2eilBhCCARIsAG0Pf8vmwQ2GEztAmGyRDUxGDgduBFsUAuApIDa-3QOJ8BVr3ofeSGczjWQaAkNDEALw_wcB (Accessed: 22 July 2023). "},
  {"ID": "7", "Term" : "QA", "Description" : "Ensures software meets requirements while being free from faults", "References" : "Gillis, A.S. (2019) What is Quality Assurance? - definition from whatis.com, Software Quality. Available at: https://www.techtarget.com/searchsoftwarequality/definition/quality-assurance (Accessed: 22 July 2023). "},
  {"ID": "8", "Term" : "Developer", "Description" : "Process of creating software", "References" : "Margaret Rouse&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;  Margaret Rouse is an award-winning technical writer and teacher known for her ability to explain complex technical subjects simply to a non-technical et al. (2017) Developer, Techopedia. Available at: https://www.techopedia.com/definition/17095/developer (Accessed: 22 July 2023). "},
  {"ID": "9", "Term" : "Operations for DevOps", "Description" : "It is the maintenance of system performance", "References" : "Murrell, J. (2021) What is operations in DevOps? the evolving role of operations in DevOps, The GitHub Blog. Available at: https://github.blog/2020-12-03-the-evolving-role-of-operations-in-devops/#:~:text=The%20Ops%20role%20in%20DevOps%20compared%20to%20traditional%20IT%20operations&amp;text=The%20QA%20teams%20install%20and,interaction%20with%20the%20development%20teams. (Accessed: 22 July 2023). "},
  {"ID": "10", "Term" : "Deployment", "Description" : "Process of making software available for use", "References" : "What is deployment in Software &amp; Web Development? (no date) Umbraco. Available at: https://umbraco.com/knowledge-base/deployment/ (Accessed: 22 July 2023). "},
  {"ID": "11", "Term" : "Agile", "Description" : "Agile is a flexible, iterative, collaborative approach to software development.", "References" : "Beck, K., Beedle, M., van Bennekum, A., Cockburn, A., Cunningham, W., Fowler, M., ... & Thomas, D. (2001). Manifesto for Agile Software Development. Agile Alliance."},
  {"ID": "12", "Term" : "Enterprise", "Description" : "An enterprise is a large organization engaged in business activities.", "References" : "Enterprise. Oxford English Dictionary. Oxford University Press, 2021."},
  {"ID": "13", "Term" : "Customer centric", "Description" : "Customer-centric is an approach prioritizing customer needs and satisfaction.", "References" : "Shah, D., Kumar, V., & Kim, K. H. (2014). Managing customer profits: The power of habits. Journal of Marketing Research"},
  {"ID": "14", "Term" : "Automation", "Description" : "Automation in DevOps is streamlining processes for efficient software delivery.", "References" : "Loukides, M. (2012). What is DevOps?. O'Reilly Media, Inc."},
  {"ID": "15", "Term" : "Collaboration", "Description" : "Collaboration in DevOps involves shared responsibilities and communication among teams.", "References" : "Kim, G., Humble, J., Debois, P., & Willis, J. (2016). The DevOps Handbook: How to Create World-Class Agility, Reliability, and Security in Technology Organizations. IT Revolution."},
  {"ID": "16", "Term" : "Integration", "Description" : "Integration in DevOps means merging all developers' work regularly.", "References" : "Duvall, P. M., Matyas, S., & Glover, A. (2007). Continuous Integration: Improving Software Quality and Reducing Risk. Addison-Wesley Professional."},
  {"ID": "17", "Term" : "CI server", "Description" : "A CI server automates testing and merging of code changes.", "References" : "Fowler, M., & Foemmel, M. (2006). Continuous integration. Thought-Works, https://www.thoughtworks.com/continuous-integration."},
  {"ID": "18", "Term" : "SCM", "Description" : "Software Configuration Management (SCM) controls and tracks code changes.", "References" : "Babich, W. A. (1986). Software configuration management: coordination for team productivity. Addison-Wesley Longman Publishing Co., Inc."},
  {"ID": "19", "Term" : "Staging", "Description" : "Staging is a replica of production environment for testing changes.", "References" : "Humble, J., & Farley, D. (2010). Continuous delivery: reliable software releases through build, test, and deployment automation. Pearson Education. "},
  {"ID": "20", "Term" : "Production", "Description" : "Production is the live environment where the software is utilized.", "References" : "Hunt, A., & Thomas, D. (2000). The Pragmatic Programmer: Your Journey to Mastery. Addison-Wesley Professional. "},
  {"ID": "21", "Term" : "Azure", "Description" : "Cloud computing platform and services offered by Microsoft Corporation.", "References" : "Bigelow, S.J. (2022) What is Microsoft Azure and how does it work?, Cloud Computing. Available at: https://www.techtarget.com/searchcloudcomputing/definition/Windows-Azure"},
  {"ID": "22", "Term" : "Containers", "Description" : "Isolated, lightweight, consistent environments for developing and deploying applications.", "References" : "What is a container? (no date) Docker. Available at: https://www.docker.com/resources/what-container/"},
  {"ID": "23", "Term" : "Virtual Machine", "Description" : "Emulated computer system running atop a physical host, isolating software.", "References" : "What is a virtual machine?: Vmware glossary (2022) VMware. Available at: https://www.vmware.com/au/topics/glossary/content/virtual-machine.html"},
  {"ID": "24", "Term" : "Kernel", "Description" : "Core component of operating systems, managing hardware and system processes.", "References" : "Bigelow, S.J. and Lulka, J. (2022) What is a kernel? types of kernels, Data Center. Available at: https://www.techtarget.com/searchdatacenter/definition/kernel"},
  {"ID": "25", "Term" : "Docker", "Description" : "Platform for developing, shipping, and running applications in containers.", "References" : "Docker Overview (2023) Docker Documentation. Available at: https://docs.docker.com/get-started/overview/"},
  {"ID": "26", "Term" : "microservices", "Description" : "Decentralized approach, breaking applications into small, independently deployable services.", "References" : "Larsson, M. (2014) Microservices, Amazon. Available at: https://aws.amazon.com/microservices/"},
  {"ID": "27", "Term" : "mongoDB", "Description" : "NoSQL database, document-oriented, scalable, high-performance, open-source, JSON-like storage.", "References" : "What is mongodb? (no date) MongoDB. Available at: https://www.mongodb.com/what-is-mongodb"},
  {"ID": "28", "Term" : "docker compose", "Description" : "Tool for defining, running multi-container Docker applications using configuration.", "References" : "Overview of docker compose (2023) Docker Documentation. Available at: https://docs.docker.com/compose/"},
  {"ID": "29", "Term" : "Metadata", "Description" : "Data about data, describing characteristics, context, or information structure.", "References" : "Metadata: Definition, examples, benefits &amp; use cases (no date) Atlan. Available at: https://atlan.com/what-is-metadata/"},
  {"ID": "30", "Term" : "Kubernetes", "Description" : "Open-source platform for automating deployment, scaling, and managing containerized applications.", "References" : "Metadata: Definition, examples, benefits &amp; use cases (no date) Atlan. Available at: https://atlan.com/what-is-metadata/"},
  {"ID": "31", "Term": "Networking ", "Description": "Interconnecting computers to share resources, data, and information seamlessly ", "References": "What is networking and why is it so important? (plus tips) (no date) BetterUp. Available at: https://www.betterup.com/blog/networking (Accessed: 10 September 2023).  "},
  {"ID": "32", "Term": " Bridge network", "Description": "Device connecting different network segments, making them function as one ", "References": "Upravnik (2023) Network bridge explained, Study CCNA. Available at: https://study-ccna.com/network-bridge-explained/ (Accessed: 10 September 2023).  "},
  {"ID": "33", "Term": " overlay network", "Description": "Virtual network built atop another network, decoupled from underlying infrastructure ", "References": "Fruehe, J. (2022) What is an overlay network?, Networking. Available at: https://www.techtarget.com/searchnetworking/definition/overlay-network (Accessed: 10 September 2023).  "},
  {"ID": "34", "Term": "Mtacvlan network ", "Description": "Virtual interface type, unique MAC addresses, Linux containers network communication ", "References": " Surender KumarSurender Kumar has more than twelve years of experience in server and network administration. His fields of interest are Windows servers (2023) Macvlan network driver: Assign MAC address to Docker containers, 4sysops. Available at: https://4sysops.com/archives/macvlan-network-driver-assign-mac-address-to-docker-containers/#:~:text=The%20macvlan%20network%20assigns%20a,basis%20of%20their%20MAC%20address. (Accessed: 10 September 2023). "},
  {"ID": "35", "Term": "Synchronous communication ", "Description": " Exchange of information with immediate response, occurring at the same time.", "References": " O’Brien, S. (2021) What is synchronous communication? synchronous vs. Asynchronous Communication, RingCentral UK Blog. Available at: https://www.ringcentral.com/gb/en/blog/definitions/synchronous-communication/ (Accessed: 10 September 2023). "},
  {"ID": "36", "Term": " Asynchronous communication", "Description": "Communication without expecting immediate response; occurs at different times independently ", "References": "Barron, S. (no date) What is Asynchronous Communication &amp; How Do You Use It?, Owl Labs Blog. Available at: https://resources.owllabs.com/blog/asynchronous-communication (Accessed: 10 September 2023).  "},
  {"ID": "37", "Term": "RabbitMQ ", "Description": " Open-source message broker software; facilitates asynchronous messaging between applications", "References": "Part 1: Rabbitmq for beginners - what is Rabbitmq? (no date) CloudAMQP. Available at: https://www.googleadservices.com/pagead/aclk?sa=L&amp;ai=DChcSEwjjy-Oq4Z-BAxXcxEwCHXtOCkQYABAAGgJ0bQ&amp;ae=2&amp;gclid=Cj0KCQjw0vWnBhC6ARIsAJpJM6dnlmSHOBMBWRFcP4-DhJN6zsanpo98eLFkhuoLywmV57bBJKcslH0aAuTtEALw_wcB&amp;ohost=www.google.com&amp;cid=CAESa-D23MbKF6rl1sYtdAqeRqagEvhmuxsm3Z1QSPI8j73cJVwrkLV8hH74REio50-D7gY3WyyeKtTS4POZzZrL_2mfmdgQQpjAl-w8YdEkiHTRfQQ1F_Rhcgk6l5hQgFD5LxO0_XsSZPS38CP-&amp;sig=AOD64_11IgkCWS0JAvw11IhGl9sTB5Jhsw&amp;q&amp;adurl&amp;ved=2ahUKEwjtp92q4Z-BAxW6bvUHHbbvDXsQ0Qx6BAgKEAE&amp;nis=8&amp;dct=1 (Accessed: 10 September 2023).  "},
  {"ID": "38", "Term": "SCM ", "Description": "Machine learning algorithm for classification; uses hyperplanes to separate classes through informaiton management system", "References": "Author links open overlay panelHaifeng Lin a et al. (2022) An innovative machine learning model for Supply Chain Management, Journal of Innovation &amp; Knowledge. Available at: https://www.sciencedirect.com/science/article/pii/S2444569X22001111#:~:text=Supply%20chain%20management%20(SCM)%20integrates,links%20in%20the%20supply%20chain. (Accessed: 10 September 2023).  "},
  {"ID": "39", "Term": "Terraform ", "Description": "Infrastructure as code tool for provisioning, managing cloud resources declaratively ", "References": "Awati, R. and Gillis, A.S. (2023) What is terraform?: Definition from TechTarget, IT Operations. Available at: https://www.techtarget.com/searchitoperations/definition/Terraform (Accessed: 10 September 2023).  "},
  {"ID": "40", "Term": "Cluster ", "Description": "Group of interconnected computers working together as a single system", "References": " Kirvan, P. (2022) What is a cluster? – definition from TechTarget, WhatIs.com. Available at: https://www.techtarget.com/whatis/definition/cluster (Accessed: 10 September 2023). "},
  {"ID": "41", "Term": "Continous integration ", "Description": "Automating code integration, testing frequently, ensuring rapid, reliable releases. ","References": "Freeman, E. (2019) DevOps, Amazon. Available at: https://aws.amazon.com/devops/continuous-integration/#:~:text=Continuous%20integration%20refers%20to%20the,for%20a%20release%20to%20production. (Accessed: 15 September 2023).  "},
  {"ID": "42", "Term": "Bitbucket ", "Description": "Version control repository, collaboration tool, integrates CI/CD, for software development. ","References": "Evaluator Resources Support (no date) Bitbucket: What is Bitbucket? | Evaluator Resources | Atlassian Documentation. Available at: https://confluence.atlassian.com/confeval/development-tools-evaluator-resources/bitbucket/bitbucket-what-is-bitbucket (Accessed: 15 September 2023).  "},
  {"ID": "43", "Term": "Automated testing ", "Description": "Execute tests automatically, ensure software quality, faster feedback, reliable releases. ","References": "Atlassian (no date) Automated software testing for continuous delivery, Atlassian. Available at: https://www.atlassian.com/continuous-delivery/software-testing/automated-testing (Accessed: 15 September 2023).  "},
  {"ID": "44", "Term": "Unit testing ", "Description": "Test individual code components, ensure functionality, early defect detection, isolation. ","References": "What is unit testing? (no date) smartbear.com. Available at: https://smartbear.com/learn/automated-testing/what-is-unit-testing/ (Accessed: 15 September 2023).  "},
  {"ID": "45", "Term": "Integrated testing ", "Description": "Testing combined components, validate interactions, ensures system integration, functionality check. ","References": "Awati, R. (2022) What is integration testing (I&amp;T)?, Software Quality. Available at: https://www.techtarget.com/searchsoftwarequality/definition/integration-testing (Accessed: 15 September 2023).  "},
  {"ID": "46", "Term": "End-to-end testing ", "Description": "Simulate real user scenarios, validate entire system flow, ensures functionality.  ","References": "What is end to end testing? (2023) BrowserStack. Available at: https://www.browserstack.com/guide/end-to-end-testing#:~:text=End%2Dto%2Dend%20testing%20is%20a%20type%20of%20testing%20that,and%20meets%20the%20user%20requirements. (Accessed: 15 September 2023).  "},
  {"ID": "47", "Term": "CI/CD ", "Description": "Continuous Integration/Continuous Delivery: automate code integration, testing, consistent, rapid deployment.  ","References": "https://www.redhat.com/en/topics/devops/what-is-ci-cd "},
  {"ID": "48", "Term": "Monitoring ", "Description": "Track applications, infrastructure health; ensure performance; detect, resolve issues quickly. ","References": "https://www.crowdstrike.com/cybersecurity-101/observability/devops-monitoring/ "},
  {"ID": "49", "Term": "Logging ", "Description": "Capture, store events; analyze system behavior; troubleshoot; ensure operational transparency. ","References": "Fallwell, C. (2023) What is Log Management in DevOps?, Sumo Logic. Available at: https://www.sumologic.com/blog/log-management-devops/#:~:text=What%20is%20logging%20in%20DevOps,or%20databases%2C%20among%20other%20sources. (Accessed: 15 September 2023).  "},
  {"ID": "50", "Term": "Variables ", "Description": "Parameters that influence processes, configurations, adaptable, environment-specific, streamline automation tasks. ","References": "Juliakm (no date) Define variables - azure pipelines, Azure Pipelines | Microsoft Learn. Available at: https://learn.microsoft.com/en-us/azure/devops/pipelines/process/variables?view=azure-devops&amp;tabs=yaml%2Cbatch (Accessed: 15 September 2023).  "},
];

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Glossary table', Glossary : glosaryList });
});

module.exports = router;
