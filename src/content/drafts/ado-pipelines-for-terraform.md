---
title: 'My first Terraform pipeline in Azure DevOps'
description: 'A devlog-style brain dump of what actually happened while setting up my first Terraform pipeline in Azure DevOps.'
pubDate: '2025-08-15'
updatedDate: '2025-08-15'
heroImage: '../../assets/azure-functions.png'
tags: ['Azure', 'Functions', 'API', 'Serverless']
---

This is the first time I'm implementing Terraform pipelines into Azure DevOps context with the main goal of creating an automated way to manage the infrastructure. 

This has been for many months a pending task in my backlog, as I always feared the complexity of setting up the whole process. But now is the time to get it done, and to overcome the fear of the unknown.

## Starting with the 'keep it simple' approach

For the last few months, I have been forcing myself to apply always the 'keep it simple' approach to all the projects I have been working on. This, together with the "Start small" philosophy, has been a great way to get things done without getting overwhelmed by the complexity of the task at hand.

Because in the AI era, one of the most overwhelming feelings is the vast amount of information and possibilities that we have at our disposal. So yes, start small, and keep it simple, is the way to go.

## The first steps 

I have already a WebApp that I want to deploy and is the perfect scenario to test the whole process. This first phase will be for infrastructure provisioning and later I will work on the app deployment part, also using pipelines.

So for that matter I have created a folder inside the root project called `.azure-pipelines` and inside it, a file called `ado-pipeline-terraform.yml` that will contain the definition of the pipeline. 

The yaml file is pretty basic: 

```yaml
trigger:
- main
pool:
  vmImage: 'ubuntu-latest'
steps:
- task: TerraformInstaller@0
  inputs:
    terraformVersion: 'latest'
- script: |
    terraform init
    terraform plan
    terraform apply -auto-approve
  workingDirectory: '$(System.DefaultWorkingDirectory)/.azure-pipelines/terraform'
  displayName: 'Run Terraform'
```

Let's break it down. 