# NPM Publishing Guide - AdaDesignSystem

## 🚨 **403 Error Fix: Enable Two-Factor Authentication**

The error you received indicates that npm requires 2FA for package publishing.

### **Step 1: Enable 2FA on Your npm Account**

#### **Option A: Using npm CLI (Recommended)**
```bash
# Enable 2FA for publishing only (recommended)
npm profile enable-2fa auth-only

# Or enable 2FA for all npm operations
npm profile enable-2fa auth-and-writes
```

#### **Option B: Using npm Website**
1. Go to [npmjs.com](https://www.npmjs.com) and login
2. Click on your profile → **Account** → **Two-Factor Authentication**
3. Enable **"Authorization and Publishing"** or **"Authorization Only"**
4. Follow the setup with your authenticator app (Google Authenticator, Authy, etc.)

### **Step 2: Publish with 2FA**

After enabling 2FA, publishing will prompt for your OTP code:

```bash
npm publish
# You'll be prompted: "Enter OTP: "
# Enter the 6-digit code from your authenticator app
```

### **Alternative: Using Access Token (For CI/CD)**

If you prefer using an access token:

#### **Create Access Token**
```bash
# Create a publish-level access token
npm token create --read-write
```

#### **Use Token for Publishing**
```bash
# Set token as environment variable
export NPM_TOKEN="your-token-here"

# Or login with token
npm login --auth-type=legacy --registry=https://registry.npmjs.org/
```

## **Step 3: Publish the Package**

Once 2FA is enabled:

```bash
# Make sure you're in the right directory
cd AdaDesignSystem

# Build the package
npm run build-package

# Publish to npm
npm publish

# When prompted, enter your 2FA code from authenticator app
```

## **Step 4: Verify Publication**

After successful publishing:

```bash
# Check if your package is published
npm info ada-design-system

# View it on npm website
# https://www.npmjs.com/package/ada-design-system
```

## **Step 5: Test Installation**

Test your published package:

```bash
# In a different directory, test installation
mkdir test-ada-design
cd test-ada-design
npm init -y
npm install ada-design-system
```

## **Common Issues & Solutions**

### **Package Name Already Exists**
If "ada-design-system" is taken, you can:

```bash
# Check if name is available
npm view ada-design-system

# If taken, use scoped package name
# Update package.json name to:
"name": "@julienmatondo/ada-design-system"

# Then publish scoped package
npm publish --access public
```

### **Permission Issues**
Make sure you're logged in with the correct npm account:

```bash
npm whoami
npm logout
npm login
```

### **Version Conflicts**
If the version already exists:

```bash
# Update version in package.json
npm version patch   # 3.1.0 → 3.1.1
npm version minor   # 3.1.0 → 3.2.0  
npm version major   # 3.1.0 → 4.0.0

# Then publish
npm publish
```

## **Security Best Practices**

1. **Use 2FA**: Always enable two-factor authentication
2. **Scoped Packages**: Consider using `@username/package-name` format
3. **Access Tokens**: Use read-only tokens when possible
4. **Regular Updates**: Keep dependencies updated

## **After Publishing**

Your package will be available as:

```bash
npm install ada-design-system
# Or if scoped:
npm install @julienmatondo/ada-design-system
```

## **Success! 🎉**

Once published, your AdaDesignSystem will be available to:
- All ADA applications (AdaMenu, AdaStaff, AdaStock, AdaAuth)
- Other developers in the community
- Easy installation across projects

**Next**: Update your ADA apps to use `npm install ada-design-system` instead of manual component copying!