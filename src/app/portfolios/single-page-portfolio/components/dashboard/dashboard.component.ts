import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-single-page-portfolio-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class SinglePagePorfolioDashboardComponent implements OnInit {
  portFolioData: any = {
    userProfile: {
      profileImage: 'assets/images/profile.png',
      firstname: 'Sohrab Alam',
      lastname: 'Ansari',
      designation: 'Angular Developer',
      description: `I am angular developer and I live in ahmedabad with my family. I assure that I can give my 100% in everything,
        whether it is small project or big, I does it in very professional way and perfectionism.
        My hobby is singing and exploring new thing.
        I also have very keen interest in gathering knowledge of Space, Outer Universe.`,
      city: 'Ahmedabad',
      country: 'India',
      email: 'ansari.shohrab80@gmail.com',
      phone: '9173740370',
    },
    socialMediaInfo: [
      {
        redirectionLink: 'https://twitter.com/a_shohrab',
        iconClass: 'fab fa-twitter',
        name: 'Twitter',
      },
      {
        redirectionLink:
          'https://www.linkedin.com/in/sohrab-alam-ansari-2077a1111/',
        iconClass: 'fab fa-linkedin-in',
        name: 'LinkedIn',
      },
      {
        redirectionLink: 'https://github.com/ansarishohrab',
        iconClass: 'fab fa-github-alt',
        name: 'Git hub',
      },
    ],
    latest_project: {
      title: 'Sales CRM for growing sales teams',
      description: `A sales CRM that offers every feature required for your sales team to achieve their quotas and grow your
            relationships
            and revenue.`,
    },
    projects: [
      {
        title:
          'Ionic Mobile Application for India’s one of the leading Credit cooperative society',
        description: `This application consist of All the features that any bank application has such as Mobile
          Recharge, Wallet Recharge,
          Fund Transfer within bank & outside bank.`,
      },
      {
        title:
          'Advisor Facing Ionic Application for India’s one of the leading credit cooperative society',
        description: `I have made this application for advisor by which they can make DD Collection, RD Collection,
          New Account Opening and
          more features like this.`,
      },
      {
        title:
          'Web & Mobile Application using Angular and Ionic for leading bank',
        description: `This application provides features like Applying for personal loan, Fund transfer, Recharges etc.`,
      },
    ],
    experiences: [
      {
        designation: 'Software Engineer',
        company: 'Rapidops Solutions Pvt. Ltd.',
        joiningDate: 'Sep 2020',
        endDate: 'Present',
        description: `My role is to develop bug free and efficient angular application with api integration.
          Building scallable and optimal solution in frontend application. Right now I'm working in rapidops salesmate
          CRM product`,
      },
      {
        designation: 'Technical Consultant',
        company: 'Streebo Solutions Pvt. Ltd.',
        joiningDate: 'July 2017',
        endDate: 'Sep 2020',
        description: `In this company my role was to develop end-to-end solutions for client requirements using Angular frontend
          application, Node services and Forms Experience Builder (Product of IBM)`,
      },
      {
        designation: 'Intern',
        company: 'Streebo Solutions Pvt. Ltd.',
        joiningDate: 'Jan 2017',
        endDate: 'July 2017',
        description: `In this phase my role was to explore IBM Forms Experience Builder, IBM Web Content Management, Angular, Ionic
          2 and Node`,
      },
    ],
    skills: [
      {
        name: 'Angular',
        description: 'Angular 2+',
        level: 'Pro',
        knowledgePercentage: '100',
      },
      {
        name: 'Ionic 2',
        description: 'Ionic 2+',
        level: 'Pro',
        knowledgePercentage: '100',
      },
      {
        name: 'HTML, CSS & SCSS',
        description: 'All the types of styling',
        level: 'Expert',
        knowledgePercentage: '90',
      },
      {
        name: 'Javascript, jQuery & TypeScript',
        description: 'All type of scripting languages',
        level: 'Expert',
        knowledgePercentage: '90',
      },
      {
        name: 'Node JS',
        description: 'Still in learning phase',
        level: 'Intermediate',
        knowledgePercentage: '50',
      },
      {
        name: 'Java',
        description: 'I have learned this in college time',
        level: 'Intermediate',
        knowledgePercentage: '50',
      },
      {
        name: 'Android Native',
        description: 'I have learned this in college time',
        level: 'Beginner',
        knowledgePercentage: '25',
      },
      {
        name: 'SQL & MongoDB',
        description: 'Know the basics',
        level: 'Beginner',
        knowledgePercentage: '25',
      },
    ],
    education: [
      {
        degree: 'B.E Computer Engineering',
        college: 'Silver Oak College of Engineering & Technology',
        startDate: '2013',
        endDate: '2017',
      },
      {
        degree: 'HSC',
        college: 'Rajasthan Hindi High School',
        startDate: '2011',
        endDate: '2013',
      },
      {
        degree: 'SSC',
        college: 'Shahpur Hindi High School',
        startDate: '2010',
        endDate: '2011',
      },
    ],
    languages: [
      {
        name: 'English',
        level: 'Professional Proficiency',
        rating: 5,
      },
      {
        name: 'Hindi',
        level: 'Native Speaker',
        rating: 4,
      },
      {
        name: 'Gujarati',
        level: 'Professional Proficiency',
        rating: 3,
      },
    ],
  };
  constructor() {}

  ngOnInit(): void {}
}
