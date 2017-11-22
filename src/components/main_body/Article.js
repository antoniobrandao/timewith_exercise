import React, { Component } from 'react'

import TabbedQuotes from './sub_components/TabbedQuotes'
import CommonSymptoms from './sub_components/CommonSymptoms'

import icon_twitter from '../../assets/svg/icon_headline.svg';

class Article extends Component {
  render() {
    return (

      <article>

        <p>
          We all know what it's like to worry from time to time. That flutter of butterflies in your tummy before a final exam, sweaty palms before delivering that big presentation you've been working on for weeks… These are anxious feelings we can all can relate to.
        </p>

        <TabbedQuotes />
        <CommonSymptoms />

        <p>
          When anxious moments move from momentary worries like, ‘did I lock the door?’ to incessant checking - locking and re-locking - or never-ending racing thoughts that feel overwhelming… <a href='#'>It might be worth taking the time to check-in, and reach out for support.</a>
        </p>

        <h1 className='light'>Understanding Anxiety</h1>
        <h5 className='light'>Remember, you're not alone!</h5>

        <p>
          If you’re feeling anxious and overwhelmed, it’s important to remember that you’re not alone.  Anxiety disorders are a lot more common than many of us think.  In 2013, there were 8.2 million cases of anxiety in the UK, and 40% of disabilities reported worldwide are down to anxiety and/or depression (unfortunately, the two often go hand-in-hand).  Remember that just in acknowledging your anxiety you’re taking a really important first step towards turning things around.  Fortunately, there’s lots of support out there to help you learn how to better manage your anxiety and take the necessary steps to break negative patterns and move forward.
        </p>
        <p>
          Whilst anxiety disorders can present themselves in lots of different ways, there are some common signs to look out for that might indicate it’s time to seek support. We’ve compiled a list of potential symptoms that can accompany an anxiety disorder to use as a guidance below:
        </p>

        <h1 className='light'>Common Symptoms</h1>
        <p>
          Whilst it’s normal to have worries, particularly if you’ve been under a lot of pressure or something stressful has happened like losing a job or breaking up with a partner… But when those worries feel like they’re endless, and they start to plague you day-in-day out over a long period of time, then it might be time to seek help.  Generalised Anxiety Disorder (GAD) is a common anxiety disorder that involves persistent worries.  Whilst a person suffering from GAD might worry about the same types of the things we all do - work, family, relationships, health - these worries can start to get out of proportion, or become so constant that they become overbearing. GAD is diagnosed when you find yourself feeling anxious almost every day, and the intensity of your worrying doesn’t feel like it lessens over a period of 6 months.
        </p>

        <h5 className='iconed'><img src={icon_twitter} alt="Twitter" />
          Fears that don’t match up
        </h5>
        <p>
          As we all know, fear is part and parcel of life.  However, when fear falls out of proportion to what’s actually happening, or you begin to feel fearful about taking part in everyday activities, then it might indicate that there’s something larger at play.  One example of an anxiety disorder centred around fear is someone who suffers from a phobia.  Phobias bring about a feeling of intense dread or anxiety that might appear out of proportion to an outsider.  A person suffering from a phobia is sometimes conscious that their reaction is ‘over the top’ or irrational, but the intensity of the fear is so overwhelming that it still prevents them from carrying out a particular activity.
        </p>

        <h5 className='iconed'><img src={icon_twitter} alt="Twitter" />
          Difficulty sleeping
        </h5>
        <p>
          Whether it’s racing thoughts or an inability to ‘switch off’, many anxiety disorders end up having an impact on the quality of our sleep.  You might find it difficult to fall asleep at night, or perhaps you’re sleeping lots but still find yourself waking up feeling tired and groggy.
        </p>

        <h5 className='iconed'><img src={icon_twitter} alt="Twitter" />
          Compulsive behaviour
        </h5>
        <p>
          It’s human to have little quirks about how we like things.  Maybe we like keeping our house especially clean and tidy, or we prefer our morning cup of tea with the milk in first...  However, when these habits start to become obsessional or compulsive - as though we ‘can’t’ do something without them - then this might point towards a type of anxiety disorder such as Obsessive Compulsive Disorder (OCD).  OCD can look different depending on the individual, but it’s normally characterised by unwanted thoughts or ideas that cause someone to behave in an obsessional, and often repetitive way.
        </p>

        <h5 className='iconed'><img src={icon_twitter} alt="Twitter" />
          Panic attacks
        </h5>
        <p>
          Panic attacks can be a frightening experience, particularly if it’s something that hasn’t happened to you before.  A panic attack normally comes alongside a set of uncomfortable physical symptoms which might include any of the following: difficulty catching your breath, a racing heartbeat, sweating, dizziness, chest pains…  Whilst panic attacks can be triggered by a specific activity (taking public transport or crossing a bridge, for instance), many people find that their panic attacks come completely out of the blue which can make living with the uncertainty especially difficult.
        </p>

        <h5 className='iconed'><img src={icon_twitter} alt="Twitter" />
          Tension in the Body
        </h5>
        <p>
          There’s no denying that the mind and the body are inextricably linked. This means that many people suffering anxiety will also experience physical symptoms.  These might be awkward aches and pains, jaw clenching, balling your fists, grinding your teeth…  Whilst Irritable Bowel Syndrome (IBS) isn’t necessarily directly caused by anxiety, our digestive system is particularly sensitive to stress.  This means that the two often coincide.  In fact, it’s thought that over 50% of people who suffer from IBS also suffer from an anxiety disorder.
        </p>

        <h5 className='iconed'><img src={icon_twitter} alt="Twitter" />
          Feeling self-conscious
        </h5>
        <p>
          Nobody likes feeling as though all eyes are on them, but very often this is the case for people who suffer from Social Anxiety.  It’s normal to have days when we don’t feel like socialising, but a person who suffers from social anxiety will feel an overwhelming fear about being in social situations.  They might worry for days - or even weeks - before a particular gathering or event.  And afterwards, they might find themselves running it over and over again in the their minds, analysing what they said and what people might’ve thought about them.
        </p>

        <h1 className='light'>How can Theraphy help?</h1>
        <p>
          Living with an anxiety disorder can be scary, overwhelming - and at its very worse, completely debilitating.  But amidst all the discomfort, it’s sometimes helpful to remember that even distressing emotions and sensations hold a purpose.  Anxiety is in fact, a survival tactic hard-wired into us from our ancestors.  It was anxiety that saved them from that grisly bear lurking in the shadows whilst they were out hunting for lunch.  The more highly tuned our fight-or-flight response was, the better chance we had of surviving.  Of course, the difference is today we don’t experience threats in quite the same way as our caveman ancestors…  However, anxiety’s purpose is still there to protect us.
        </p>
        <p>
          The problem isn’t anxiety itself, but rather when we get ‘stuck’ in its cycle and the brain gets wired into looking for potential threats.  But there is a way out, and there are lots of tools available that can help.  Talk therapy is great for anxiety because it provides the space to unravel uncomfortable thoughts and feelings in confidence.  For many, bringing these worries into an open space and recognising them for what they are can bring about a sense of relief in itself.  A good therapist will teach you tools to help accept and catch these anxious patterns in their tracks so they’re unable to govern you in the same way.
        </p>

      </article>
    );
  }
}

export default Article