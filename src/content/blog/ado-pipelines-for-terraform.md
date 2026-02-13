---
title: 'Day 1: Overcoming the Fear of the Unknown: My First Terraform Pipeline in Azure DevOps'
description: 'My first experience implementing Terraform pipelines in Azure DevOps, and how I&apos;m applying the &quot;keep it simple&quot; approach to overcome the fear of the unknown.'
pubDate: '2026-02-13'
updatedDate: '2026-02-13'
heroImage: '../../assets/blog-pipelines.jpg'
tags: ['Azure DevOps', 'Terraform', 'Pipelines', 'Infrastructure as Code', 'Automation']
---

This is the first time I'm implementing Terraform pipelines into Azure DevOps context with the main goal of creating an automated way to manage the infrastructure. 

For many months, this sat as a pending task in my backlog. I always feared the complexity of setting up the entire process, but the time has finally come to get it done and overcome that fear of the unknown.

## Starting with the 'keep it simple' approach

For the last few months, I have been forcing myself to always apply a "keep it simple" approach to every project I work on. This, combined with a "start small" philosophy, has been a great way to get things done without getting overwhelmed by the task at hand.

In the AI era, the vast amount of information and possibilities at our disposal can easily feel overwhelming. So yes, starting small and keeping it simple is definitely the way to go for me.

## But the thing gets more complex than expected

In fact, thanks to AI models, I was able to generate a first version of a Terraform pipeline in Azure DevOps that completely worked. Success, right? Not exactly.

Although the pipeline ran as expected initially, when I tried to apply a subsequent change, the state wasn't updated, and Terraform complained about the resource not being found.

Something was wrong with this first version. After a thorough review, I found that the part of the pipeline meant to connect to the Azure Storage Account to retrieve the state wasn't working at all. Every time I ran the pipeline, a local state was created instead. I quickly realized my initial approach was flawed. I had to go back to the drawing board and rethink my strategy to ensure that the pipeline could properly connect to the Azure Storage Account and manage the state as intended.

## Second Try: Working version

After a few tweaks, I discovered that I needed to use the Azure CLI task to log in to Azure and set the subscription context before running the Terraform tasks. This way, the pipeline was able to authenticate properly and access the Azure Storage Account to retrieve and update the remote state.

With those modifications done, the pipeline finally worked as expected. New changes were accurately reflected in the state, and resources were created and updated flawlessly.

## Conclusion 

I have lost my fear of the complexity involved in implementing pipelines in Azure DevOps, so I consider this first experience a massive success. I learned that the "keep it simple" approach is a fantastic way to tackle daunting tasks without getting overwhelmed. But I also learned that sometimes, you just have to push through a few iterations to find the right approach and get things working.

My next step will be to define a robust template to serve as a baseline for all future Terraform pipelines, and to start implementing more complex scenarios with multiple environments and configurations.

## Key Takeaways

- Don't be afraid of the unknown. Embrace it as an opportunity to learn and grow.
- Start small and keep it simple. This approach can help you get things done without feeling overwhelmed.
- Be prepared to iterate. Sometimes, the first version of a solution won't work as expected, and that's okay. Use it as a learning opportunity to refine your approach and find the right solution.
- Leverage AI tools to assist you in generating initial versions of your code, but always review and test it thoroughly to ensure it meets your requirements.