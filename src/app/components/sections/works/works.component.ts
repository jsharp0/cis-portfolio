import { Component, OnInit } from '@angular/core';
import { Subject, Observable, BehaviorSubject } from 'rxjs';


export class SampleWork {
  name: string;
  sourceName: string;
  linkToDownload: string;
  viewable?: boolean;
  linkToView?: string;
  applicableFilters: string[];
  description?: string;
}

@Component({
  selector: 'app-works',
  templateUrl: './works.component.html',
  styleUrls: ['./works.component.scss']
})

export class WorksComponent implements OnInit {
  public workFilter: BehaviorSubject<string> = new BehaviorSubject('all');
  public singleGallery1: any;
  public albums: any = [];
  public work: SampleWork[] = [
    {
      name: 'Burlington Northern Case Analysis',
      sourceName: 'OneDrive', 
      linkToDownload: 'https://cardmaillouisville-my.sharepoint.com/:w:/g/personal/jgshar02_louisville_edu/EUL4ntkuHu1Nn6b4aGgfgkMBTXw_cGV7T34B5FdI4URTPg?e=nNIwHO',
      applicableFilters: ['Analysis', 'Communication'],
      description: "The Burlington Northern case includes an analysis of the railroad company, Burlington Northern, using Porter's Five Forces. It also details three alternative they might take when it comes to considering their business issue and what seems to be the best alternative, in addition to its impact on stakeholders.",
      viewable: false
    },
    {
      name: 'Appex Case Analysis',
      sourceName: 'OneDrive', 
      linkToDownload: 'https://cardmaillouisville-my.sharepoint.com/:w:/g/personal/jgshar02_louisville_edu/Ec4kxubFgp9Eu4vEPQ9FgdgBW4Vm3MPUPrElHWXWChQIPQ?e=bBjUmJ',
      applicableFilters: ['Analysis', 'Communication'],
      description: "The Appex case includes an analysis of Appex, a company in the cellular industry during the late 1980s and into 1990, using Porter's Five Forces. It focuses on their issues regarding organizational structure, and which structure they should choose based on the theories we discussed in our CIS 410 class.",
      viewable: false
    },
    {
      name: 'Symantec Case Analysis',
      sourceName: 'OneDrive', 
      linkToDownload: 'https://cardmaillouisville-my.sharepoint.com/:w:/g/personal/jgshar02_louisville_edu/ESvTqxJ3BGtGuoz4xK33ej8B4rHP44m9quxKtk3lHMZQOg?e=YPFETQ',
      applicableFilters: ['Analysis', 'Communication'],
      description: "The Symantec centered around a company in the software industry that had grown rapidly in a short amount of time. The analysis considers their main business issue with communication and three alternatives to address it, using theories discussed by our course text.",
      viewable: false
    },
    {
      name: 'CIS 350 Lab Report',
      sourceName: 'OneDrive', 
      linkToDownload: 'https://cardmaillouisville-my.sharepoint.com/:b:/g/personal/jgshar02_louisville_edu/EbPPLX5xnu5GhSar2MI-7_0B7sXLaF7bgYcmpn_CyxmZoQ?e=Sa8KHO',
      applicableFilters: ['Technical Knowledge'],
      description: 'This lab report helped to develop skills related to the Linux command line, including creating and modifying new files and compiling programs. It also required an understanding of how to navigate a file directory from the Linux terminal.',
      viewable: false
    },
    {
      name: 'CIS 350 Homework Sample',
      sourceName: 'OneDrive', 
      linkToDownload: 'https://cardmaillouisville-my.sharepoint.com/:b:/g/personal/jgshar02_louisville_edu/EbPPLX5xnu5GhSar2MI-7_0B7sXLaF7bgYcmpn_CyxmZoQ?e=Sa8KHO',
      applicableFilters: ['Technical Knowledge'],
      description: 'This assignment demonstrates an ability to convert between the different number systems used by computers, and to calculate how many bytes of storage different pieces of data will require from a computer.',
      viewable: false
    },
    {
      name: 'Basic Website Using HTML and CSS',
      sourceName: 'OneDrive', 
      linkToDownload: 'https://cardmaillouisville-my.sharepoint.com/:u:/g/personal/jgshar02_louisville_edu/EYp8e3_OMndPqPwLfEdY3N8BfT72nkF7VLmK-ZLMeaUWrQ?e=xnnsx5',
      applicableFilters: ['Technical Knowledge', 'Technical Skills'],
      description: "These files came from a personal project to design a basic website using HTML, CSS, and the UI framework Bootstrap. It is designed to be responsive and resize based on the user's screen size.",
      viewable: false
    },
    {
      name: 'SQL Problem Solving Exercise 1',
      sourceName: 'OneDrive', 
      linkToDownload: 'https://cardmaillouisville-my.sharepoint.com/:b:/g/personal/jgshar02_louisville_edu/EYc3njCvhOFFj5ptq5gYXtgBHGlwHTG772sn59VY1h8nUQ?e=4e8dU6',
      applicableFilters: ['Technical Knowledge', 'Technical Skills'],
      description: 'This CIS 310 assignment involves the use of SQL, SQL Server, and an understanding of relational databases to design the correct queries to get the data specified by the assignment.',
      viewable: false
    },
    {
      name: 'SQL Problem Solving Exercise 2',
      sourceName: 'OneDrive', 
      linkToDownload: 'https://cardmaillouisville-my.sharepoint.com/:b:/g/personal/jgshar02_louisville_edu/EQYfyJZaAb5Gi5TbfG0qLNUBj0XZmoULkFc9cJSn4YsQDA?e=e8ke1s',
      applicableFilters: ['Technical Knowledge', 'Technical Skills'],
      description: 'This CIS 310 assignment involves the use of SQL, SQL Server, and an understanding of relational databases to design the correct queries to get the data specified by the assignment.',
      viewable: false
    },
    {
      name: 'Industries Memo',
      sourceName: 'OneDrive', 
      linkToDownload: 'https://cardmaillouisville-my.sharepoint.com/:w:/g/personal/jgshar02_louisville_edu/ES95eVVx3nlAltZuQkxg5pMBR1a15F9U-9pRWCgv__CkxQ?e=HZgbpO',
      applicableFilters: ['Communication'],
      description: 'This assignment was to practice professionally communicating important information to a group of people in the form of a memo, which is a common medium in business communication.',
      viewable: false
    },
    {
      name: 'C# Sample Program 1',
      sourceName: 'OneDrive', 
      linkToDownload: 'https://cardmaillouisville-my.sharepoint.com/:u:/g/personal/jgshar02_louisville_edu/EeG6Qo9bS99KiosQEIE22zEBOvxGjLpfuWBRjWhnEOlKtg?e=ibzy8h',
      applicableFilters: ['Technical Knowledge', 'Technical Skills'],
      description: 'This assignment is from the CIS 199 course that demonstrates a working knowledge of C#, which is an object-oriented development language.',
      viewable: false
    },
    {
      name: 'C# Sample Program 2',
      sourceName: 'OneDrive', 
      linkToDownload: 'https://cardmaillouisville-my.sharepoint.com/:u:/g/personal/jgshar02_louisville_edu/EbGooi5VLa5Al-RTxcaXSlcBoUH5jrVzJT6MjifNQplIWw?e=IcSTJN',
      applicableFilters: ['Technical Knowledge', 'Technical Skills'],
      description: 'This assignment is from the CIS 199 course that demonstrates a working knowledge of C#, which is an object-oriented development language.',
      viewable: false
    },
    {
      name: 'Resume',
      sourceName: 'OneDrive', 
      linkToDownload: 'https://cardmaillouisville-my.sharepoint.com/:w:/g/personal/jgshar02_louisville_edu/EfDbV3jcwQZPqAcSif4CiWYB2W20Lxw4GdpSt9gpQxJSBw?e=kWK1fK',
      applicableFilters: ['Communication'],
      description: 'This resume was designed for my Business 201 course to help me learn how to craft a professional document that would catch the eye of hiring managers while at the same time be readable by ATS.',
      viewable: false
    },
    {
      name: 'Snake Game created using Python',
      sourceName: 'OneDrive', 
      linkToDownload: 'https://cardmaillouisville-my.sharepoint.com/:u:/g/personal/jgshar02_louisville_edu/EerbI4fxwJtFtijAgklLfTUBkuRLr-g40eOe73TbJoU9mQ?e=33eyGw',
      applicableFilters: ['Technical Skills', 'Technical Knowledge'],
      description: 'This independent project is a replica of the old Snake game. It was completed as an instructional activity using the Python computer language, and helped me better understand object-oriented development through the creation of different classes and objects to give the game functionality.',
      viewable: false
    },
    {
      name: 'Long Report on Changing Technology',
      sourceName: 'OneDrive', 
      linkToDownload: 'https://cardmaillouisville-my.sharepoint.com/:b:/g/personal/jgshar02_louisville_edu/EWbPmT2AXcBMgjr4OBU4LjcBt8n1EEt4wJncxwfKxdemxw?e=QBUux2',
      applicableFilters: ['Communication', 'Analysis'],
      description: 'This group assignment was a semester long project to present a well-designed long report on the issue of changing technology and its impact on business. Its purpose was to present information to the audience in an easy to understand way.',
      viewable: false
    },
    {
      name: 'ToDo Application developed with Angular',
      sourceName: 'OneDrive', 
      linkToDownload: 'https://cardmaillouisville-my.sharepoint.com/:u:/g/personal/jgshar02_louisville_edu/Eak5arHOg_hKhki5Cl13VO0BVG_3ciXNpaA9D2u46sSOSQ?e=8Tcqxh',
      applicableFilters: ['Technical Skills', 'Technical Knowledge'],
      description: 'This project is an independent one I completed based on a mockup design from Frontend Mentor, a website for helping developers improve their frontend website development skills. It uses Angular to create a functional ToDo application, where users can add, complete, or delete todos.',
      viewable: false
    },
    {
      name: 'CIS 150 Development Exercises using HTML, CSS, and JavaScript',
      sourceName: 'OneDrive', 
      linkToDownload: 'https://cardmaillouisville-my.sharepoint.com/:u:/g/personal/jgshar02_louisville_edu/ESo893PUyJZOvTadQQV7kpIBW98LpZUK5CNHVQETX-_2kA?e=2qC87X',
      applicableFilters: ['Technical Skills', 'Technical Knowledge'],
      description: 'CIS 150 was a class focused on web development using technologies like HTML, CSS, and JavaScript. The attached files show my work through the class in using these technologies to layout webpages and add behavior to them as specified by an assignnment.',
      viewable: false
    }
  ];

  filteredWork: SampleWork[];

  videoObject: Array<object> = [
    {
      video: 'https://www.youtube.com/watch?v=qf9z4ulfmYw',
      posterImage: 'assets/images/works/3.svg',
    }
  ];

  constructor() {
    this.workFilter.next('all');
  }

  ngOnInit(): void {
    this.filteredWork = this.work;

    // TO DO: Unsubscribe from this observable in ngOnDestroy
    this.workFilter.subscribe(() => {
      this.filteredWork = this.work.filter(item => this.showItem(item, this.workFilter.getValue()));
    })
  }

  setFilter(filter: string): void {
    this.workFilter.next(filter);
  }

  showItem(item: SampleWork, workFilter: string): boolean {
    if (item.applicableFilters.includes(workFilter) || workFilter === 'all') {
      return true;
    }
    return false;
  }

  onChange (e) {
    this.workFilter.next(e.target.value);
  }
}
