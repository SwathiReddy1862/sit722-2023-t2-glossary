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

];

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Glossary table', Glossary : glosaryList });
});

module.exports = router;
