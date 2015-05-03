var bio = {
    "name" : "Rajesh Kumar",
    "role" : "Software Engineer",
    "contacts" : {
        "mobile" : "+1 (669) 600 1311",
	"email" : "rajeshkrcse@gmail.com",
	"github" : "rajesh-kr",
	"twitter" : "rajesh_kr",
	"location" : "701 First Ave, Sunnyvale, US"
    },
    "welcome" : "Hi, Welcome to my page",
    "image" : "images/fry.jpg",
    "skills" : ["Perl", "JavaScript"]
};

var works = [
    {
        "position" : "Software Engineer",
        "employer" : "Yahoo India",
        "years" : "2011-2014",
        "location" : "Bangalore, KA, India",
        "description" : "I joined Yahoo India straight from my college. I was selected through campus placement. Started working as Software Development Engineer, in a team called DomainMatch. It is search based service which provided Sponsored keywords. It also provide algo listing, popular categories, related terms, etc. This product was later developed to display text based ads on Yahoo O&O products."
    },
    {
        "position" : "Sr. Software Engineer",
        "employer" : "Yahoo",
        "years" : "2015",
        "location" : "701 First Avenue, Sunnyvale, US",
	"description" : "Moved to Sunnyvale, US when the upper managemet decided to move the team from Bangalore to Sunnyvale. Started working here in role of Sr. Softeware Development Engineer. Completed the migration task to RHEL6 which was pending from a long time. Also completed many pending tasks."
    },
];

var education = {
    "schools" : [
        {
            "name" : "Indian School of Mines",
            "location" : "Dhanbad, JH, India",
            "majors" : ["CSE"],
            "year" : 2011
        }
    ]
};

var projects = {
    "projects" : [
        {
	    "title" : "YPA",
	    "date" : "2014-2015",
	    "images" : [],
	    "description" : "YPA stands for \"Yahoo Partner Ads\". This tools allows sub syndication partners of Yahoo to create ad ad to be displayed on their partner websites. The partners can choose the look and feel of the ads from the tool, or they can upload custom CSS file, or they can pass the value using dynamic parameters from the page. This is in early phase and very few partners are onboarded till now, and only for US market. Once we have more confidence in the tool and localization and internationalization features are launched, this tool will be open to more global partners"
	},
	{
	    "title" : "ROS",
	    "date" : "2012-2014",
	    "images" : ["images/197x148.gif"],
	    "description" : "ROS is used to display text based ads on Yahoo O&O properties. Yahoo properties such as Answers, Local, Shopping, Shine, etc. uses this to display text based ads on those sites. They can come with different requirement for look and feel for their websites. Also, there is an optimization engine, which when feeded with different look and feel, tells which one is generating more click or rather more revenue."
	},
	{
	    "title" : "DM",
	    "date" : "2011-2015",
	    "images" : ["images/197x148.gif", "images/197x148.gif"],
	    "description" : "DM which stands for DomainMatch. As the name suggest, it was started to give sponsored listing, popular categories and related terms based on the name of the domain, where these were going to display. Later it was grown for ISP traffic. And later it fastly completing ROS and YPA tasks. It is actually core of ROS and YPA projects."
	}
    ]
};

projects.display = function() {
        for (project in projects.projects) {
            $("#projects").append(HTMLprojectStart);

	    var formattedProjectTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
	    $(".project-entry:last").append(formattedProjectTitle);
	    var formattedProjectDate = HTMLprojectDates.replace("%data%", projects.projects[project].date);
	    $(".project-entry:last").append(formattedProjectDate);
	    var formattedPojectDesc = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
	    $(".project-entry:last").append(formattedPojectDesc);

	    if(projects.projects[project].images.length > 0) {
	        for (image in projects.projects[project].images) {
	            var formattedProjectImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
	            $(".project-entry:last").append(formattedProjectImage);
		}
	    }
	}
};

projects.display();

function inName(name) {
    var nameArr = name.split(' ');
    var first = nameArr.shift();
    first = first[0].toUpperCase() + first.slice(1).toLowerCase();
    nameArr.unshift(first);
    nameArr[1] = nameArr[1].toUpperCase();

    name = nameArr.join(' ');
    return name;
}

$("#main").append(internationalizeButton);

if(bio.skills.length > 0) {
    $("#header").append(HTMLskillsStart);

    for(skill in bio.skills) {
        var formattedSkill = HTMLskills.replace("%data%", bio.skills[skill]);
        $("#skills").append(formattedSkill);
    }
}

$("#mapDiv").append(googleMap);

function displayWork() {
    for(work in works) {
        $("#workExperience").append(HTMLworkStart);
    
        var formattedEmployer = HTMLworkEmployer.replace("%data%", works[work].employer);
        var formattedWorkTitle = HTMLworkTitle.replace("%data%", works[work].position);
    
        var formattedEmployerTitle = formattedEmployer + formattedWorkTitle;
        $(".work-entry:last").append(formattedEmployerTitle);
        
        var formattedWorkLocation = HTMLworkLocation.replace("%data%", works[work].location);
        $(".work-entry:last").append(formattedWorkLocation);
        var formattedWorkYears = HTMLworkDates.replace("%data%", works[work].years);
        $(".work-entry:last").append(formattedWorkYears);
        var formattedDesc = HTMLworkDescription.replace("%data%", works[work].description);
        $(".work-entry:last").append(formattedDesc);
    }
}

displayWork();

var formattedWelcome = HTMLwelcomeMsg.replace("%data%", bio.welcome);
$("#header").prepend(formattedWelcome);

var formattedPic = HTMLbioPic.replace("%data%", bio.image);
$("#header").prepend(formattedPic);

var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
$("#header").prepend(formattedMobile);

var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
$("#header").prepend(formattedRole);

var formattedName = HTMLheaderName.replace("%data%", bio.name);
$("#header").prepend(formattedName);
