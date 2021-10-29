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
      viewable: false
    },
    {
      name: 'Appex Case Analysis',
      sourceName: 'OneDrive', 
      linkToDownload: 'https://cardmaillouisville-my.sharepoint.com/:w:/g/personal/jgshar02_louisville_edu/Ec4kxubFgp9Eu4vEPQ9FgdgBW4Vm3MPUPrElHWXWChQIPQ?e=bBjUmJ',
      applicableFilters: ['Analysis', 'Communication'],
      viewable: false
    },
    {
      name: 'Symmantec Case Analysis',
      sourceName: 'OneDrive', 
      linkToDownload: 'https://cardmaillouisville-my.sharepoint.com/:w:/g/personal/jgshar02_louisville_edu/ESvTqxJ3BGtGuoz4xK33ej8B4rHP44m9quxKtk3lHMZQOg?e=YPFETQ',
      applicableFilters: ['Analysis', 'Communication'],
      viewable: false
    },
    {
      name: 'CIS 350 Lab Report',
      sourceName: 'OneDrive', 
      linkToDownload: 'https://cardmaillouisville-my.sharepoint.com/:b:/g/personal/jgshar02_louisville_edu/EbPPLX5xnu5GhSar2MI-7_0B7sXLaF7bgYcmpn_CyxmZoQ?e=Sa8KHO',
      applicableFilters: ['Technical Knowledge'],
      viewable: false
    },
    {
      name: 'CIS 350 Homework Sample',
      sourceName: 'OneDrive', 
      linkToDownload: 'https://cardmaillouisville-my.sharepoint.com/:b:/g/personal/jgshar02_louisville_edu/EbPPLX5xnu5GhSar2MI-7_0B7sXLaF7bgYcmpn_CyxmZoQ?e=Sa8KHO',
      applicableFilters: ['Technical Knowledge'],
      viewable: false
    },
    {
      name: 'Basic Website Using HTML and CSS',
      sourceName: 'OneDrive', 
      linkToDownload: 'https://cardmaillouisville-my.sharepoint.com/:u:/g/personal/jgshar02_louisville_edu/EYp8e3_OMndPqPwLfEdY3N8BfT72nkF7VLmK-ZLMeaUWrQ?e=xnnsx5',
      applicableFilters: ['Technical Knowledge', 'Technical Skills'],
      viewable: false
    },
    {
      name: 'SQL Problem Solving Exercise',
      sourceName: 'OneDrive', 
      linkToDownload: 'https://cardmaillouisville-my.sharepoint.com/:b:/g/personal/jgshar02_louisville_edu/EYc3njCvhOFFj5ptq5gYXtgBHGlwHTG772sn59VY1h8nUQ?e=4e8dU6',
      applicableFilters: ['Technical Knowledge', 'Technical Skills'],
      viewable: false
    },
    {
      name: 'SQL Individual Exercise',
      sourceName: 'OneDrive', 
      linkToDownload: 'https://cardmaillouisville-my.sharepoint.com/:b:/g/personal/jgshar02_louisville_edu/ETuphfWQRjFIuZIC5RgWr_kB9BgpzW99PipR1E1wGpPNlg?e=Sn313g',
      applicableFilters: ['Technical Knowledge', 'Technical Skills'],
      viewable: false
    },
    {
      name: 'Industries Memo',
      sourceName: 'OneDrive', 
      linkToDownload: 'https://cardmaillouisville-my.sharepoint.com/:w:/g/personal/jgshar02_louisville_edu/ES95eVVx3nlAltZuQkxg5pMBR1a15F9U-9pRWCgv__CkxQ?e=HZgbpO',
      applicableFilters: ['Communication'],
      viewable: false
    },
    {
      name: 'C# Sample Program 1',
      sourceName: 'OneDrive', 
      linkToDownload: 'https://cardmaillouisville-my.sharepoint.com/:u:/g/personal/jgshar02_louisville_edu/EeG6Qo9bS99KiosQEIE22zEBOvxGjLpfuWBRjWhnEOlKtg?e=ibzy8h',
      applicableFilters: ['Technical Knowledge', 'Technical Skills'],
      viewable: false
    },
    {
      name: 'C# Sample Program 2',
      sourceName: 'OneDrive', 
      linkToDownload: 'https://cardmaillouisville-my.sharepoint.com/:u:/g/personal/jgshar02_louisville_edu/EbGooi5VLa5Al-RTxcaXSlcBoUH5jrVzJT6MjifNQplIWw?e=IcSTJN',
      applicableFilters: ['Technical Knowledge', 'Technical Skills'],
      viewable: false
    },
    {
      name: 'Resume',
      sourceName: 'OneDrive', 
      linkToDownload: 'https://cardmaillouisville-my.sharepoint.com/:w:/g/personal/jgshar02_louisville_edu/EfDbV3jcwQZPqAcSif4CiWYB2W20Lxw4GdpSt9gpQxJSBw?e=kWK1fK',
      applicableFilters: ['Communication'],
      viewable: false
    },
    {
      name: 'Snake Game created using Python',
      sourceName: 'OneDrive', 
      linkToDownload: 'https://cardmaillouisville-my.sharepoint.com/:u:/g/personal/jgshar02_louisville_edu/EerbI4fxwJtFtijAgklLfTUBkuRLr-g40eOe73TbJoU9mQ?e=33eyGw',
      applicableFilters: ['Technical Skills', 'Technical Knowledge'],
      viewable: false
    },
    {
      name: 'Long Report on Changing Technology',
      sourceName: 'OneDrive', 
      linkToDownload: 'https://cardmaillouisville-my.sharepoint.com/:b:/g/personal/jgshar02_louisville_edu/EWbPmT2AXcBMgjr4OBU4LjcBt8n1EEt4wJncxwfKxdemxw?e=QBUux2',
      applicableFilters: ['Communication', 'Analysis'],
      viewable: false
    },
    {
      name: 'ToDo Application developed with Angular',
      sourceName: 'OneDrive', 
      linkToDownload: 'https://cardmaillouisville-my.sharepoint.com/:u:/g/personal/jgshar02_louisville_edu/Eak5arHOg_hKhki5Cl13VO0BVG_3ciXNpaA9D2u46sSOSQ?e=8Tcqxh',
      applicableFilters: ['Technical Skills', 'Technical Knowledge'],
      viewable: false
    },
    {
      name: 'CIS 150 Development Exercises using HTML, CSS, and JavaScript',
      sourceName: 'OneDrive', 
      linkToDownload: 'https://cardmaillouisville-my.sharepoint.com/:u:/g/personal/jgshar02_louisville_edu/ESo893PUyJZOvTadQQV7kpIBW98LpZUK5CNHVQETX-_2kA?e=2qC87X',
      applicableFilters: ['Technical Skills', 'Technical Knowledge'],
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
    // this.singleGallery1 = [
    //   {
    //     src: 'assets/images/works/1.svg',
    //     caption: 'Project Management Illustration',
    //     thumb: 'assets/images/works/1.svg'
    //   }
    // ];

    // for (let i = 5; i >= 1; i--) {
    //   const album = {
    //     src: 'assets/images/works/' + i + '.svg',
    //     caption: 'Image ' + i + ' caption here',
    //     thumb: 'assets/images/works/' + i + '.svg',
    //   };

    //   this.albums.push(album);
    // }
  }

  ngOnInit(): void {
    this.filteredWork = this.work;
    this.workFilter.subscribe(() => {
      this.filteredWork = this.work.filter(item => this.showItem(item, this.workFilter.getValue()));
      console.log(this.filteredWork);
    })
  }

  setFilter(filter: string): void {
    this.workFilter.next(filter);
  }

  showItem(item: SampleWork, workFilter: string): boolean {
    // console.log(workFilter)
    
    if (item.applicableFilters.includes(workFilter) || workFilter === 'all') {
      return true;
    }
    return false;
  }

  onChange (e) {
    console.log('change')
    this.workFilter = e.target.value;
  }

}
