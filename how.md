# How I built Stuff Plus Simple

In baseball, machine learning is often used to quantify a player's ability from a range of inputs. In this website, I'm interested in replicating some models that explain a pitcher's value. Two ways a pitcher's value can be calculated are stuff and location. I built these models to better understand how this type of models work. Before I start I want to reference some other pages that really helped me to do this:

- [An Introduction to the Application of Stuff Models on Triple-A Data](https://www.prospectslive.com/prospects-live/2023/12/1/an-introduction-to-the-application-of-stuff-models-on-triple-a-data)
- [Pitch Design: What is Stuff+? Quantifying Pitches with Pitch Models](https://www.drivelinebaseball.com/2021/12/what-is-stuff-quantifying-pitches-with-pitch-models/)
- [Revisiting Stuff+: An Update on Driveline’s Methodology to Quantifying Pitch Design](https://www.drivelinebaseball.com/2024/05/revisiting-stuff-plus/)

I would highly recommend reading these before continuing.

## What is Stuff, Location, and Pitching Plus?

- Stuff plus: it tries to quantify the value of a pitcher's pitch (one way a pitcher throws the ball) solely on its physical attributes like spin, velocity and release point.
- Location plus: it tries to quantify the pitcher's ability to put the pitches in the right place based on the count (the situation).
- Pitching plus: it tries to quantify the pitcher's overall pitching ability using the inputs from both stuff and location plus.

## Data

The data came from Baseball Savant and it was downloaded using a [simple](https://github.com/enzdor/dl-bs) script I wrote in Go, this script gives the data for a specific season in csv format. The rows of the csv file are all the pitches thrown during a season and the columns contain the data relating to them. The data that is going to be used are the physical characteristics of a pitch (for stuff plus), the location and count (for location plus) and the delta run expectancy which is the change in run expectancy before and after the specific pitch. The delta run expectancy is the varialbe that we are trying to predict, the 'y', while the other variables would be the 'x's, the regressors.

## Script

The tool that was used to build these models was FLAML's automl (auto machine learning) which allows me to perform accurate regressions without having to worry about tuning the models. The library that was used for these models was XGBoost because it is widely used. Each of the three models (stuff, location, and pitching) is subdivided into three different groups according to pitch types: fastball, offspeed, and breaking. These three different general pitch type groups allow similar pitches to be compared to each other instead of being compared to pitches that are very different. For example, a four-seam fastball (a very fast pitch with little vertical and horizontal movement) will be compared to a two-seamer (a very fast pitch with some vertical and horizontal movement) but will not be compared to a curveball (slow pitch with lots of vertical movement) or a slider (slow pitch with lots of horizontal and vertical movement).

The script can be subdivided into three general parts:

1. Loading data: here the script takes the csv file and will create lists where the results will be saved to.
2. Performing calculations: here is the part where automl is called and the regression is performed for each model. After this, a pitcher's pitch type value is calculated and the pitcher's arsenal value is also calculated.
3. Storing the data: all of the results are finally saved to a sqlite file with a summary file accompanying it.

You can find the source code for the script [here](!https://github.com/enzdor/ss-py/), you will find that there are some comments trying to explain what happens in each block of code.

## Results

All of the stuff, location, and pitching plus values for each pitcher can be seen in the home page of this website.

First of all we are going to look at the R^2 of the different models, which shows how well does the model explain the 'y', which in our case would be how well does the model explain either, stuff, location or pitching plus.

|                | Stuff | Location | Pitching |
|----------------|-------|----------|----------|
| Fastballs      | 0.078 | 0.039    | 0.053    |
| Breaking Balls | 0.028 | 0.056    | 0.069    |
| Offspeed       | 0.020 | 0.025    | 0.131    |

As we can see from the table above which contains the R^2 for each of the models, the models are not very good at explaining the 'y' which in our case is the delta run expectancy.

The second statistic we are going to look at is the stickiness of the stuff, location, and pitching plus. This is done by running a simple regression of the 2023 on the 2024, meaning we are trying to explain the results of the 2024 with the results of the 2023 to see how predictive the models are season to season.

|                | Stuff | Location | Pitching |
|----------------|-------|----------|----------|
|2023 on 2024 R^2|-0.75  | -0.50    | -0.48    |

In the table above, we can see that all of the R^2 are negative. This means that the values of the 2023 are worse at predicting the values of the 2024 season than the mean of the 2024 season, this is very bad.

Lastly, we are going to take a look at the feature importance for the stuff model, how significant is the effect of independent variable is on the dependent variable. We are going to do this only for the stuff model.

In general, the three most relevant independent variables are release_pos_x, release_pos_z, vx0, vy0, and vz0. Below I provide a sketch with the axis, for you to better understand. release_pos is from where the ball is released while the 'v' variables are the velocities of the pitch, in feet per second determined at y=50 feet. This shows that the models are most concerned with velocity and release point.

You can find out what all of the independent variables are in this [link](https://baseballsavant.mlb.com/csv-docs). Below I will provide plots that show the relationship of the main five independent variables against the stuff, location, or pitching plus for each of the three different pitch type groups.

## Conclusion

There is not much that we can deduce from these results as these are very imperfect models. There are things that can be done to improve them. The first thing that should be tested is, instead of creating different models for each pitch type group, all of the pitches should be grouped together, this may give more accurate results. The second thing would be to include pitcher handedness and adjust the release_pos_x variable accordingly. Lastly, the time budget could be increased from 1 hour.

I can say that this was a very good project, even if the results are very inaccurate. It allowed me to:
- to learn to use automl tools
- get a deeper understanding of python (even if it isn't my favourite language)
- get a deeper understanding of stuff models
- improve my sql knowledge
- apply some of my econometric knowledge

