# GitHub Autopsy 🔍

Pull someone's public GitHub activity and get a brutally honest psychological profile.

**Features:**
- 📊 **Real Analytics**: Commit frequency, language breakdown, activity heatmap
- 🎭 **AI Personality Roast**: Claude AI generates personalized psychological profiles
- 📈 **Scoring System**: Productivity, chaos level, and employability scores
- 🎨 **Polished UI**: Shareable results card with dark mode aesthetic

## What We Analyze

- **Commit Patterns**: Frequency, recency, and consistency
- **Language Choices**: Top 5 programming languages used
- **Repo Stats**: Total public repos, stars, and followers
- **Commit Messages**: Tone and professionalism indicators
- **Account Age**: Years active on GitHub

## Example Diagnosis

> "You haven't committed in 3 weeks and your last message was 'asdf'. Diagnosis: **Burnout Survivor**"

## Tech Stack

- **Frontend**: Plain HTML/CSS/JavaScript (no frameworks)
- **Backend**: Vercel Serverless Functions (Node.js)
- **AI**: Claude API (Anthropic)
- **Deployment**: Vercel Free Tier

## Quick Start

### Local Development

```bash
# Install dependencies
npm install

# Set environment variable
export ANTHROPIC_API_KEY=your_key_here

# Run dev server
npm start
```

Visit `http://localhost:3000` and enter a GitHub username.

### Deploy to Vercel

1. **Push to GitHub**:
   ```bash
   git push origin main
   ```

2. **Connect to Vercel**:
   - Go to [vercel.com](https://vercel.com)
   - Import this repository
   - Add `ANTHROPIC_API_KEY` environment variable

3. **Done!** Your app is live at `your-project.vercel.app`

## Files

- `index.html` (renamed from `github-roast.html`) - Frontend UI (served statically)
- `api/claude.js` - Serverless function that proxies to Claude API
- `vercel.json` - Vercel configuration
- `package.json` - Dependencies

## Environment Variables

Set these in your Vercel project settings:

- `ANTHROPIC_API_KEY` - Your Anthropic API key

## License

MIT 

